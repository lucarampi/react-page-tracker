'use client';
import React from 'react';
import { cn } from '@/lib/utils';

const SubTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h2 className={cn('text-2xl font-medium text-gray-800', className)} {...props} />;
};

export default SubTitle;
