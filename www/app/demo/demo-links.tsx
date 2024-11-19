import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Logo } from '@/app/home-components/logo';

type DemoLinksProps = {
  activeIndex?: number;
};

const DemoLinks = ({ activeIndex }: DemoLinksProps) => {
  return (
    <div className="border-b-1 mb-3 flex flex-wrap items-center gap-3 border-b pb-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-lg font-bold hover:underline hover:underline-offset-2"
      >
        <Logo width={32} height={32} />
        React Page Tracker
      </Link>
      <span className="text-gray-400">|</span>
      <Link
        href="/demo"
        className={cn(
          'underline underline-offset-2',
          activeIndex === 0 && 'font-bold text-blue-400',
        )}
      >
        Demo Home
      </Link>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 20 }).map((_, i) => (
            <Link
              href={`/demo/${i + 1}${(i + 1) % 2 === 0 ? `?query=${i + 1}` : ''}`}
              key={i + 1}
              className={cn(
                'underline underline-offset-2',
                activeIndex === i + 1 && 'font-bold text-blue-400',
              )}
            >
              {i + 1}
            </Link>
          ))}
        </div>
        <div>Even-numbered links will include a query string.</div>
      </div>
    </div>
  );
};

export default DemoLinks;
