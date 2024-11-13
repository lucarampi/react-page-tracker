import React from 'react';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

const rootRoute = createRootRoute({
  component: () => {
    return (
      <>
        <div className="flex gap-2 p-2">
          <Link
            to="/"
            className="underline underline-offset-2 [&.active]:font-bold [&.active]:text-blue-400"
          >
            Home
          </Link>
          {Array.from({ length: 20 }).map((_, i) => (
            <Link
              to={`/${i}`}
              key={i}
              className="underline underline-offset-2 [&.active]:font-bold [&.active]:text-blue-400"
            >
              {i}
            </Link>
          ))}
        </div>
        <hr />
        <section className="p-5">
          <Outlet />
        </section>
        <TanStackRouterDevtools />
      </>
    );
  },
});

export default rootRoute;
