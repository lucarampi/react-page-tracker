# Next.js Installation and Configuration

## step 1: Install react-page-tracker
```bash
npm install react-page-tracker
```

## step 2: Add `PageTracker` to your layout component
`layout.tsx`
```diff
+ import { PageTracker } from 'react-page-tracker';
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
    <body>
+      <PageTracker />
        {children}
    </body>
    </html>
  );
}
```

You are all set up! Now you can access the page tracking information in any component.

## step 3: Access the page tracking information in any component
`component.tsx`
```tsx
import { usePageTrackerStore } from 'react-page-tracker';

export const PageTrackerValue = () => {
  // get all state
  const state = usePageTrackerStore((state) => state);
  // get the specific state you'd like to use
  const pickState = usePageTrackerStore((state) => ({
    isFirstPage: state.isFirstPage,
    referrer: state.referrer,
    pageHistory: state.pageHistory,
  }));

  return (
    <div className="flex">
      <div className="flex flex-col gap-3">
        <pre className="rounded-md bg-gray-100 px-2 py-0.5 font-bold">
          state: {JSON.stringify(state)}
        </pre>
        <pre className="rounded-md bg-gray-100 px-2 py-0.5 font-bold">
          pickState: {JSON.stringify(pickState)}
        </pre>
      </div>
    </div>
  );
};
```
