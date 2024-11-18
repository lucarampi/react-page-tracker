'use server';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import fs from 'fs/promises';

const BackForwardCode = async () => {
  const code = await fs.readFile('app/demo/[demoId]/back-forward-buttons.tsx', 'utf-8');
  return (
    <details>
      <summary> above buttons sample code</summary>
      <SyntaxHighlighter language={'tsx'} style={dracula}>
        {code}
      </SyntaxHighlighter>
    </details>
  );
};

export default BackForwardCode;
