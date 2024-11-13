'use client';
import React from 'react';
import { usePageTrackerHandler } from './use-page-tracker-handler';

export type PageTrackerProps = {
  initialData?: Record<string, unknown>;
  children?: React.ReactNode;
};

export const PageTracker = ({ children, initialData }: PageTrackerProps) => {
  usePageTrackerHandler({ initialData });
  return <>{children}</>;
};
