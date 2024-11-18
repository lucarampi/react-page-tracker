'use client';
import React from 'react';
import { usePageTrackerStore } from '../../../../src';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const BackForwardButtons = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { isFirstPage, isLastPage, pageHistory, pageHistoryLength } = usePageTrackerStore(
    (state) => state,
  );
  return (
    <div className={cn('flex flex-col gap-3', className)} {...props}>
      <div className="flex gap-3">
        <Button variant="outline" disabled={pageHistory.length < 3} onClick={() => history.go(-2)}>
          ⏪️ (history.go(-2)
        </Button>
        <Button variant="outline" disabled={isFirstPage} onClick={() => history.back()}>
          ◀️ (history.back)
        </Button>
        <Button variant="outline" disabled={isLastPage} onClick={() => history.forward()}>
          ️▶️ (history.forward)
        </Button>
        <Button
          variant="outline"
          disabled={pageHistoryLength - pageHistory.length < 2 || isLastPage}
          onClick={() => history.go(2)}
        >
          ⏩️ (history.go(2)
        </Button>
      </div>
      {/* The following `children` is for RSC to render code */}
      {children}
    </div>
  );
};

export default BackForwardButtons;
