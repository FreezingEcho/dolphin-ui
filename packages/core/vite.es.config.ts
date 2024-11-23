import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// 存放组件名的数组,用于分包
const COMPONENT_NAMES = ["Button"];

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types",
    }),
  ],
  build: {
    // 指定构建输出目录
    outDir: "dist/es",
    // 库模式配置
    lib: {
      // 指定库的入口文件，使用 resolve 函数解析路径
      entry: resolve(__dirname, "./index.ts"),
      // 指定库的名称
      name: "dolphinUi",
      // 指定输出文件的名称
      fileName: "index",
      // 指定输出格式
      formats: ["es"],
    },
    // Rollup 配置选项，Vite 底层使用 Rollup
    rollupOptions: {
      // 外部依赖配置，这里指定 react 为外部依赖
      external: ["react"],
      // 输出配置
      output: {
        // 资源文件命名配置，这里对 style.css 文件进行了特殊处理
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          // 对其他资源文件使用默认命名
          return assetInfo.name as string;
        },
        // 代码分割
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          } else if (id.includes("/packages/hooks")) {
            return "hooks";
          } else if (id.includes("/packages/utils")) {
            return "utils";
          }

          for (const item of COMPONENT_NAMES) {
            if (id.includes(`/packages/components/${item}`)) {
              return item;
            }
          }
        },
      },
    },
  },
});
