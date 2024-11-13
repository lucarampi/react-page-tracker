import React from 'react';
import { Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

const RootRoute = () => {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <div>
          {Array.from({ length: 20 }).map((_, i) => (
            <Link to={`/${i}`} key={i} className="[&.active]:font-bold">
              {i}
            </Link>
          ))}
        </div>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};

export default RootRoute;
