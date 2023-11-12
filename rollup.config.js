import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "./dist",
        format: "cjs",
        sourcemap: true,
        chunkFileNames: "react-bricks-ui-[hash].js",
      },
      {
        dir: "./dist",
        format: "esm",
        sourcemap: true,
        chunkFileNames: "react-bricks-ui-[hash].esm.js",
      },
    ],
    plugins: [
      // peerDepsExternal(),
      // resolve(),
      // commonjs(),
      // json(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser({ format: { comments: false } }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
