import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost'
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, _req, _res) => {
            proxyReq.setHeader('connection', 'keep-alive');
          });
        }
      }
    },
    watch: {
      usePolling: true
    },
    headers: {
      'Connection': 'keep-alive',
      'Keep-Alive': 'timeout=60'
    },
    maxHeaderSize: 16384  // Increased header size limit (16KB)
  }
});
