import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// antd
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.join(__dirname, "src"),
        },
    },
    plugins: [
        vue(),
        Components({
            resolvers: [AntDesignVueResolver()],
        }),
    ],
    server: {
        proxy: {
            // 使用 proxy 实例
            "/api": {
                target: "http://121.43.97.203:10010",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
            "/socket.io": {
                target: "ws://localhost:3000",
                ws: true,
            },
        },
    },
});
