import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Layers3 } from 'lucide-react';

const Heading = () => {
  return (
    <section className="flex flex-col items-center gap-2">
      <h1 className="text-4xl font-bold text-gray-800">React Page Tracker</h1>
      <p className="mb-4 text-xl text-gray-500 lg:px-40">
        <span>
          A lightweight, zero-dependency library providing accurate navigation tracking, fixed
          document.referrer value, and complete history support for React frameworks.
        </span>
      </p>
      <div className="flex gap-3">
        <Button asChild>
          <Link href="/demo">
            <Layers3 />
            Demo
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://github.com/hsuanyi-chou/react-page-tracker">
            <Github />
            GitHub
          </Link>
        </Button>
      </div>
      <Button variant="link" className="-mt-2 text-gray-600" asChild>
        <Link href="/docs">Documentation</Link>
      </Button>
    </section>
  );
};

export default Heading;
