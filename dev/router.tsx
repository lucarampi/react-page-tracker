import { createRouter } from '@tanstack/react-router';
import rootRoute from './route/root-route';
import homeRoute from './route/home';
import demoRoute from './route/demo';

const routeTree = rootRoute.addChildren([homeRoute, demoRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
