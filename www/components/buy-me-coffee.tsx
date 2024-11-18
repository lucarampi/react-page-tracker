import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const BuyMeCoffee = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('flex flex-col gap-3', className)} {...props}>
      <Link href="https://www.buymeacoffee.com/typeart">
        <Image
          src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"
          alt="buy-me-coffee"
          width={162}
          height={28}
        />
      </Link>
      <span className="text-sm">
        Built by{' '}
        <Link href="https://github.com/hsuanyi-chou" target="_blank">
          Hsuan Yi, Chou
        </Link>
      </span>
    </div>
  );
};

export default BuyMeCoffee;
