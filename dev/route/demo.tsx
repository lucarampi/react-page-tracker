import React from 'react';
import { demoRoute } from '../router';
import { usePageTrackerStore } from '../../src';

const Demo = () => {
  const { demoId } = demoRoute.useParams();
  const state = usePageTrackerStore((state) => state);
  return (
    <div>
      <h3>demo: {demoId}</h3>
      <div>{JSON.stringify(state)}</div>
    </div>
  );
};

export default Demo;
