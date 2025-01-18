import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve, dirname } from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    base: './',
    plugins      : [react()],
    assetsInclude: ["**/*.svg"],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                sprite: resolve(__dirname, 'src/assets/sprite.svg')
            },
        },
    },

});
