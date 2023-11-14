import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import packageJson from "./package.json" assert { type: "json" };
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: false,
        name: "react-bricks-ui",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      peerDepsExternal(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser({ format: { comments: false } }),
    ],
    external: [
      "react",
      "react-dom",
      "react-bricks/frontend",
      "classnames",
      "dayjs",
      "email-validator",
      "jsonp",
      "next-themes",
      "react-icons/ai",
      "react-icons/bs",
      "react-icons/fa",
      "react-icons/fc",
      "react-icons/fi",
      "react-hook-form",
      "react-slick",
      "react-query",
      "prismjs",
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
