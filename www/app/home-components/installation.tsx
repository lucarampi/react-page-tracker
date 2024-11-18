'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import SubTitle from '@/app/home-components/sub-title';

const Installation = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText('npm i react-page-tracker');
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-3">
        <SubTitle>Installation</SubTitle>
        <div className="flex w-80 items-center justify-between rounded-md border bg-gray-200/30 px-3 py-2">
          <span className="text-gray-800" onClick={copyToClipboard}>
            npm i react-page-tracker
          </span>
          <Button variant="outline" onClick={copyToClipboard}>
            {isCopied ? <Check className="text-green-500" /> : <Copy />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Installation;
