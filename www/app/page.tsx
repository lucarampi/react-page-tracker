import React from 'react';
import Heading from '@/app/home-components/Heading';
import Installation from '@/app/home-components/installation';
import Usage from '@/app/home-components/usage';
import AdLandingBottom from '@/components/ad/ad-landing-bottom';
import BuyMeCoffee from '@/components/buy-me-coffee';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col gap-14 px-5 py-20">
      <Heading />
      <Installation />
      <Usage />

      <Link
        className="text-center text-lg hover:text-blue-400"
        target="_blank"
        href="https://shadcnui-expansions.typeart.cc/docs/magic-back-button"
      >
        🚀 An awesome use case:{' '}
        <span className="underline underline-offset-4">
          Magic Back Button in shadcn/ui expansions
        </span>
      </Link>
      <div className="mx-auto flex w-full justify-center">
        <BuyMeCoffee className="w-fit items-center" />
      </div>
      <AdLandingBottom />
    </main>
  );
}
