// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    prefetch: true,
    output: 'server',
    base: '/hbfinances',
    env: {
        schema: {
            URL_API: envField.string({ access: 'public', context: 'client', default: 'http://localhost:8000' }),
        }
    },
    site: 'https://localhost:4321/hbfinances',

    // build: {
    //     // Genera nombres de archivo predecibles para el cache
    //     assetsPrefix: '/',
    //     inlineStylesheets: 'never'
    // },

    vite: {
        server: {
            allowedHosts: [
                'madehb.lat'
            ],
            // Opcional pero recomendado para servidores privados:
            // Esto hace que el servidor escuche en todas las interfaces de red,
            // no solo en localhost.
            host: true,
        },
        plugins: [tailwindcss()],

    },

    integrations: [react()],

    adapter: node({
        mode: 'standalone'
    })
});