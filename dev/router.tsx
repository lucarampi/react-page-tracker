import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import RootRoute from './route/root-route';
import Home from './route/home';
import Demo from './route/demo';

const rootRoute = createRootRoute({
  component: RootRoute,
});
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

export const demoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/$demoId',
  component: Demo,
});

const routeTree = rootRoute.addChildren([indexRoute, demoRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
