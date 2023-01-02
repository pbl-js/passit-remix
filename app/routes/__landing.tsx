import { Link, Outlet } from '@remix-run/react';
import { Button } from '~/components/button/Button';
import { routes } from 'consts/routes';

export default function Index() {
  return (
    <div className="p-10 bg-purple-800">
      <div className="flex flex-row gap-10 items-center mb-12">
        <Link to={routes.home} className="mr-auto  text-3xl font-bold">
          LOGO
        </Link>
        <div className="flex flex-row gap-8 text-lg font-bold items-center ">
          <Link to={routes.pageOne}>Page one</Link>
          <Link to={routes.pageTwo}>Page two</Link>
          <Link to={routes.pageThree}>Page three</Link>

          <Button href="/learn/topics">GO TO APPLICATION</Button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
