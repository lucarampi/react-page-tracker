import React from 'react';
import StoreValue from '@/app/home-components/store-value';
import DemoLinks from '@/app/demo/demo-links';

export async function generateStaticParams() {
  return Array.from({ length: 20 }).map((_, i) => ({
    demoId: `${i + 1}`,
  }));
}

const DemoPage = async ({ params }: { params: Promise<{ demoId: string }> }) => {
  const { demoId } = await params;
  return (
    <div>
      <DemoLinks activeIndex={+demoId} />
      <h1 className="text-center text-4xl font-bold text-gray-800">Demo {demoId}</h1>
      <p className="text-xl text-gray-800">
        👆Try clicking the browser's back and forward buttons and checking following values!
      </p>
      <StoreValue className="mt-5" />
    </div>
  );
};

export default DemoPage;
