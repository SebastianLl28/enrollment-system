import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Configuración flexible por entorno
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), ""); // lee .env y .env.[mode]
  const backendProtocol = env.VITE_BACKEND_PROTOCOL || "http";
  const backendHost = env.VITE_BACKEND_HOST || "localhost";
  const backendPort = env.VITE_BACKEND_PORT || "8080";
  const webPort = env.VITE_WEB_PORT || "5173";

  return defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: true, // permite acceso LAN o desde contenedor
      port: Number(webPort),
      proxy: {
        "/api": {
          target: `${backendProtocol}://${backendHost}:${backendPort}`,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    build: {
      outDir: "dist",
      sourcemap: mode === "development",
    },
  });
};
