import React from 'react';
import { createRoute } from '@tanstack/react-router';
import rootRoute from './root-route';
import PageTrackerValue from '../components/page-tracker-value';

export const demoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/$demoId',
  component: function Demo() {
    const { demoId } = demoRoute.useParams();
    return (
      <div>
        <h3 className="mb-3 text-2xl">current page: {demoId}</h3>
        <PageTrackerValue />
      </div>
    );
  },
});

export default demoRoute;
