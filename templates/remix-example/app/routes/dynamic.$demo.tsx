import { useParams } from 'react-router';
import PageTrackerValue from '~/components/page-tracker-value';
import DynamicLinks from '~/components/dynamic-links';

export default function DynamicDemo() {
  const params = useParams();

  return (
    <div>
      <DynamicLinks />
      <h1>Dynamic Demo: {params.demo}</h1>
      <PageTrackerValue />
    </div>
  );
}
