import { default as pino } from "pino";

export const log = pino(
  pino.transport({
    target: "pino/file",
    options: { destination: "/dev/null" },
  })
);
