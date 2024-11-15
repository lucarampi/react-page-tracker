import React from 'react';

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <section className="container mx-auto p-5">{children}</section>;
}
