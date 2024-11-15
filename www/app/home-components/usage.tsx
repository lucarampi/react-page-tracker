import React from 'react';
import SubTitle from '@/app/home-components/sub-title';
import StoreValue from '@/app/home-components/store-value';

const Usage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3">
        <SubTitle>Usage</SubTitle>
        <p>In any client component:</p>
        <div className="flex items-center justify-between rounded-md border bg-gray-200/30 px-3 py-2 text-gray-800 break-all">
          const state = usePageTrackerStore((state) => state);
        </div>
        <p>And you will get following values:</p>
        <StoreValue />
      </div>
    </div>
  );
};

export default Usage;
