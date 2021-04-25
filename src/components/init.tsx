import {
  Component,
  ComponentInterface,
  Prop,
  h,
  State,
  Method,
} from "@stencil/core";

@Component({
  tag: "trackmygiving-init",
})
export class Init implements ComponentInterface {
  /**
   * The token used to authorize with Flood Team API
   */
  @Prop() token?: string;
  /**
   * The address of the API host
   */
  @Prop() host?: string;
  /**
   * The address of the functions host
   */
  @Prop() functionsHost?: string;

  @State() sdk: any;
  @State() client: any;

  /**
   * Get the SDK
   * @returns The instance of Flood Team SDK
   */
  @Method()
  async getSdk() {
    return this.sdk;
  }

  /**
   * Get the GraphQL Client
   * @returns The instance of GraphQL SDK
   */
  @Method()
  async getClient() {
    return this.client;
  }

  async componentDidLoad() {
    const { sdk, client } = await (window as any).TrackMyGiving.init({
      host: this.host,
      token: this.token,
      functionsHost: this.functionsHost,
    });
    this.sdk = sdk;
    this.client = client;
  }

  render() {
    return <slot />;
  }
}
