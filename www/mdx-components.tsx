import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ className, ...props }) => (
      <h1
        className={cn('leading-14 text-bold my-6 text-4xl text-gray-800 lg:text-5xl', className)}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn('leading-14 my-4 text-3xl text-gray-800 lg:text-4xl', className)}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn('my-4 text-2xl leading-10 text-gray-800 lg:text-3xl', className)}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={cn('text-lg font-normal leading-relaxed text-gray-800 lg:text-xl', className)}
        {...props}
      />
    ),
    hr: ({ className, ...props }) => <hr className={cn('my-3', className)} {...props} />,
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          'my-4 rounded-lg border-s-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800',
          className,
        )}
        {...props}
      >
        <div className="text-xl font-medium italic leading-relaxed text-gray-900 dark:text-white">
          {props.children}
        </div>
      </blockquote>
    ),
    // eslint-disable-next-line @next/next/no-img-element
    img: (props) => (
      <img
        alt="image"
        className="my-5 w-full lg:mx-auto lg:max-w-xl"
        width="100%"
        height="auto"
        {...props}
      />
    ),
    code: ({ className, children, ...props }) => {
      const language = className?.replace('language-', '') || 'tsx'; // 取得語言類型
      return (
        <SyntaxHighlighter language={language} style={dracula}>
          {children as string}
        </SyntaxHighlighter>
      );
    },
    a: ({ className, ...props }) =>
      props.href?.startsWith('/') ? (
        <Link href={props.href} {...props} className={cn('text-blue-500 underline', className)} />
      ) : (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn('text-blue-500 underline', className)}
          {...props}
        />
      ),
  };
}
