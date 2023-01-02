import { Outlet } from '@remix-run/react';
import clsx from 'clsx';
import {
  Navigation,
  navigationWidth,
} from '~/components/navigation/Navigation';

export default function Index() {
  return (
    <div>
      <div className="z-10 relative">
        <Navigation />
        <div
          className="w-full min-h-screen px-8 py-20"
          style={{
            marginLeft: navigationWidth,
            width: `calc(100% - ${navigationWidth})`,
          }}
        >
          <Outlet />
        </div>
      </div>
      <div
        className={clsx(
          'z-0 fixed top-0 left-0 bottom-0 right-0',
          'bg-purple-600'
        )}
      />
    </div>
  );
}
