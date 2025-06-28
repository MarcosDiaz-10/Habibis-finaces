// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    prefetch: true,
    output: 'server',

    build: {
        // Genera nombres de archivo predecibles para el cache
        assetsPrefix: '/',
        inlineStylesheets: 'never'
    },

    vite: {

        plugins: [tailwindcss()],

    },

    integrations: [react()],

    adapter: node({
        mode: 'standalone'
    })
});