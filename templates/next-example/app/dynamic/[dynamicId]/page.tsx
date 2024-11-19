'use client';
import React from 'react';
import DynamicLinks from '@/app/components/dynamic-links';
import { useParams } from 'next/navigation';
import PageTrackerValue from '@/app/components/page-tracker-value';

const Page = () => {
  const params = useParams<{ dynamicId: string }>();
  return (
    <div>
      <DynamicLinks />{' '}
      <h1 className="text-bold text-3xl text-red-400"> Dynamic {params.dynamicId}</h1>
      <PageTrackerValue />
    </div>
  );
};

export default Page;
