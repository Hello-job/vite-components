import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { version } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "chrome63",
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "index",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          antd: "antd",
          react: "React",
          "react-dom": "ReactDom",
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(version),
    global: {},
  },
  server: {
    port: 4399,
  },
});
