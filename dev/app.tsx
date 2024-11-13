import { PageTracker } from '../src';
import { router } from './router';
import { RouterProvider } from '@tanstack/react-router';

export default function App() {
  return (
    <PageTracker initialData={{ myVar: 1 }}>
      <RouterProvider router={router} />
    </PageTracker>
  );
}
