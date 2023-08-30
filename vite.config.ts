import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import million from 'million/compiler';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }),react(), svgr(), checker({ typescript: true }), eslint()],
  server: {
    port: 3000,
    open: true,
    host: '127.0.0.1',
  },
});
