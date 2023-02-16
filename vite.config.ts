import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
const AutoImport = require("unplugin-auto-import/vite");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: ["vue", "vue-router"],
      eslintrc: {
        enabled: false,
        globalsPropValue: true,
      },
    }),
  ],
});
