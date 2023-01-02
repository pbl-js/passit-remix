import { Links, LiveReload, Outlet } from '@remix-run/react';

import styles from './styles/app.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Links />
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body className="bg-red-500">
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
