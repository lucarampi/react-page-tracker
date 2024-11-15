import StoreValue from '../home-components/store-value';
import DemoLinks from './demo-links';

import React from 'react';

const DemoHome = () => {
  return (
    <div>
      <DemoLinks activeIndex={0} />
      <div className="flex items-center gap-5">
        <h1 className="text-4xl font-bold text-gray-800">Demo Home</h1>

        <p className="text-xl text-gray-800">
          👆Try clicking the links and checking following values!
        </p>
      </div>

      <StoreValue className="mt-5" />
    </div>
  );
};

export default DemoHome;
