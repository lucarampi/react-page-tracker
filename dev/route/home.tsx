import React from 'react';
import { createRoute } from '@tanstack/react-router';
import rootRoute from './root-route';
import PageTrackerValue from '../components/page-tracker-value';

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Home() {
    return (
      <div className="p-2">
        <h3 className="mb-3 text-2xl">Home</h3>
        <PageTrackerValue />
      </div>
    );
  },
});

export default homeRoute;
