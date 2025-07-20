import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import reactNativeWebPlugin from "vite-plugin-react-native-web";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    reactNativeWebPlugin({
      exclude: ["react-native/Libraries/Image/AssetRegistry"],
    }),
    {
      name: "asset-registry-resolver",
      resolveId(id) {
        if (id === "react-native/Libraries/Image/AssetRegistry") {
          return resolve(__dirname, "asset-registry-shim.js");
        }
        return null;
      },
    },
    react(),
    nodePolyfills(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: (format: string) => `my-library.${format}.js`,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext",
      plugins: [
        {
          name: "asset-registry-shim",
          setup(build) {
            build.onResolve(
              { filter: /react-native\/Libraries\/Image\/AssetRegistry/ },
              () => {
                return {
                  path: resolve(__dirname, "asset-registry-shim.js"),
                };
              },
            );
            build.onResolve(
              { filter: /react-native-web\/Libraries\/Image\/AssetRegistry/ },
              () => {
                return {
                  path: resolve(__dirname, "asset-registry-shim.js"),
                };
              },
            );
          },
        },
      ],
    },
  },
});
