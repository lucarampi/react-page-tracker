import React from 'react';
import Link from 'next/link';

const DynamicLinks = () => {
  return (
    <div className="flex gap-3">
      {Array.from({ length: 10 }).map((_, i) => (
        <Link
          href={`/dynamic/${i}`}
          key={i}
          className="underline underline-offset-2 [&.active]:font-bold [&.active]:text-blue-400"
        >
          {i}
        </Link>
      ))}
    </div>
  );
};

export default DynamicLinks;
