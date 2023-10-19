import { default as pino } from "pino";

const transport = pino.transport({
  target: "pino/file",
  options: { destination: "/dev/null" },
});

pino(transport);

export default function Page() {
  return <main>Test</main>;
}
