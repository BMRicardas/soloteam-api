import { config } from "@dotenvx/dotenvx";

config({
  path: [`.env.${process.env.NODE_ENV}`],
});
