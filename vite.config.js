import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer, defineConfig } from 'vite';

// Renders the React tree into index.html at dev and build time. The site ships no client JS.
const prerender = () => {
  let devServer;
  return {
    name: 'prerender',
    configureServer(server) {
      devServer = server;
    },
    transformIndexHtml: {
      order: 'pre',
      async handler(html) {
        const server = devServer ?? await createServer({
          configFile: false,
          appType: 'custom',
          server: { middlewareMode: true, ws: false },
        });
        const { default: App } = await server.ssrLoadModule('/src/App.jsx');
        if (!devServer) await server.close();
        return html.replace('<!--app-->', renderToStaticMarkup(createElement(App)));
      },
    },
    handleHotUpdate({ server, file }) {
      if (file.endsWith('.jsx') || file.endsWith('Data.js')) server.ws.send({ type: 'full-reload' });
    },
  };
};

export default defineConfig({
  plugins: [prerender()],
});
