import React from 'react';
import { usePageTrackerStore } from '../../src';

const PageTrackerValue = () => {
  const state = usePageTrackerStore((state) => state);

  return (
    <div className="flex">
      <pre className="rounded-md bg-gray-100 px-2 py-0.5 font-bold">{JSON.stringify(state)}</pre>
    </div>
  );
};

export default PageTrackerValue;
