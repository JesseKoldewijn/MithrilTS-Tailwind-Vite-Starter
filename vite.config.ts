import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  esbuild: {
    jsx: "transform",
    jsxFactory: "m",
    jsxFragment: "'['",
    jsxImportSource: "mithril",
  },
});
