import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  esbuild: {
    jsxInject: "import m from 'mithril';",
    jsx: "transform",
    jsxFactory: "m",
    jsxFragment: "'['",
    jsxImportSource: "mithril",
  },
});
