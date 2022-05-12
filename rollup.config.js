// https://reactjs.org/docs/optimizing-performance.html#rollup

import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

import postcss from "rollup-plugin-postcss";

import image from "@rollup/plugin-image";

import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

import eslint from "@rollup/plugin-eslint";

const production = !process.env.ROLLUP_WATCH;

export default {
    input: "src/index.jsx",
    output: {
        file: `dist/${production ? "production" : "development"}/bundle.js`,
        format: "iife"
    },
    plugins: [
        nodeResolve({
            browser: true,
            extensions: [".jsx", ".js", ".json"]
        }),
        commonjs({
            include: "node_modules/**"
        }),
        eslint({ include: "./src/**/*.@(js|jsx)", throwOnError: true }),
        babel({
            babelHelpers: "bundled",
            compact: true
        }),
        replace({
            preventAssignment: true,
            "process.env.NODE_ENV": production ? JSON.stringify("production") : JSON.stringify("development")
        }),
        postcss({
            modules: true,
            minimize: production,
            use: ["sass"]
        }),
        image(),
        production && terser(),
        !production && serve({
            open: true, // Open in browser
            contentBase: ["dist", "public"]
        }),
        !production && livereload("dist")
    ]
};