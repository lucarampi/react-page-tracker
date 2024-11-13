import { useCallback } from 'react';
import { pageTrackerStore } from './page-tracker-store';

export const usePageTracker = <UDATA extends Record<string, unknown>>() => {
  return {
    setPageTrackerData: useCallback((data: UDATA) => {
      history.replaceState(
        {
          ...history.state,
          __REACT_PAGE_TRACKER_INTERNAL__: {
            ...history.state?.__REACT_PAGE_TRACKER_INTERNAL__,
            data,
          },
        },
        '',
      );
      pageTrackerStore.setState({ data });
    }, []),
  };
};
