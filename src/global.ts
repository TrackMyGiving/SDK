import "@trackmygiving/components";
import { getSdk } from "@trackmygiving/backend/dist/sdk";

if (window && !(window as any).TrackMyGiving) {
  (window as any).TrackMyGiving = {
    init: async (
      options: {
        host?: string;
        token?: string;
        onError?: string;
        functionsHost?: string;
      } = {}
    ) => {
      const libConfig = {
        host: options.host
          ? options.host
          : "https://trackmygiving-live.appspot.com",
        token: options.token ? options.token : null,
        onError: (err) => {
          console.warn(err.message.split(":")[0]);
          console.log(err.response.errors);
        },
        functionsHost: options.functionsHost
          ? options.functionsHost
          : "https://us-central1-trackmygiving-live.cloudfunctions.net",
      };
      return await (window as any).FireEnjin.init(getSdk, libConfig);
    },
  };
}
