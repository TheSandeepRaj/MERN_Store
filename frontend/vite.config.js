import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load env variables depending on mode ('development', 'production', etc)
  const env = loadEnv(mode, process.cwd(), "");

  const backendHost = env.VITE_BACKEND_HOST || "localhost";
  const backendPort = env.VITE_BACKEND_PORT || "3000";

  const backendUrl = `http://${backendHost}:${backendPort}`;

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
