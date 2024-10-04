import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";

/* if you're using React */
// import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        /* react(), // if you're using React */
        symfonyPlugin({
            stimulus: {
                controllersFilePath: './assets/js/controllers.json',
                hmr: true,
              },
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                theme: "./assets/sass/app.scss",
                
                app: "./assets/js/app.js"
            },
        }
    },
});
