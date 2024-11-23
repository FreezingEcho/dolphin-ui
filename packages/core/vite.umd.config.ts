import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(), // 使用 React 插件，启用 React 相关功能
    dts({
      // 配置生成 TypeScript 声明文件的插件
      tsconfigPath: "../../tsconfig.build.json", // 指定 tsconfig 文件路径，用于生成声明文件
      outDir: "dist/types", // 声明文件输出目录
    }),
  ],
  build: {
    // 配置构建相关的选项
    outDir: "dist/umd", // 设置构建输出目录为 dist/umd 文件夹
    lib: {
      // 配置库构建模式（即将项目构建成一个库）
      entry: resolve(__dirname, "./index.ts"), // 设置库的入口文件路径
      name: "dolphinUi", // 设置库的全局名称，当库通过 CDN 或其他方式引用时会用到
      fileName: "index", // 设置输出的文件名
      formats: ["umd"], // 设置输出格式，UMD 格式可兼容 CommonJS、AMD 和直接通过 script 标签引入的浏览器环境
    },
    rollupOptions: {
      // 配置底层使用的 Rollup 构建选项
      external: ["react"], // 设置 React 为外部依赖，构建时不会将其打包进输出文件中
      output: {
        // 配置输出文件的相关选项
        exports: "named", // 指定输出的模块使用具名导出
        globals: {
          react: "React", // 将外部的 React 库映射为全局变量 `React`
        },
        assetFileNames: (assetInfo) => {
          // 配置资源文件的命名规则
          if (assetInfo.name === "style.css") return "index.css"; // 将 style.css 文件输出为 index.css
          return assetInfo.name as string; // 对其他资源文件使用默认命名规则
        },
      },
    },
  },
});
