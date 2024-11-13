import { PageTracker } from '../src';

export default function App() {
  return (
    <PageTracker initialData={{ myVar: 1 }}>
      <div>hello</div>
    </PageTracker>
  );
}
