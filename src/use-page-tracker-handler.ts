'use client';
import { useEffect, useRef } from 'react';
import { PageTrackerState } from './typed';
import { pageTrackerStore } from './page-tracker-store';
import { PageTrackerProps } from './page-tracker';

const DEBUG = false;
export type HistoryCustomState = {
  __REACT_PAGE_TRACKER_INTERNAL__: Pick<PageTrackerState, 'pageIndex' | 'referrer' | 'pageHistory'>;
};

export const usePageTrackerHandler = ({ enableStrictModeHandler }: PageTrackerProps) => {
  const { initStrictModeDetector, strictModeDetector } = useStrictModeDetector({
    enableStrictModeHandler,
  });

  const pageIndex = useRef(0);
  // for isLastPage usage
  const visitedTotalLength = useRef(1);

  useEffect(() => {
    initHistoryState();
    initStrictModeDetector();

    /** Handle user operate original back/forward button or history.go()/back()/forward() or framework routing. **/
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state as HistoryCustomState;
      const statePageIndex = state.__REACT_PAGE_TRACKER_INTERNAL__?.pageIndex ?? 0;
      const pageEvent = pageIndex.current > statePageIndex ? 'back' : 'forward';
      if (pageEvent === 'forward') {
        pageIndex.current++;
      } else {
        pageIndex.current = statePageIndex ?? 0;
      }
      const pageHistory = [...(state.__REACT_PAGE_TRACKER_INTERNAL__?.pageHistory || [])];
      pageTrackerStore.setState({
        pageIndex: pageIndex.current,
        isFirstPage: pageIndex.current === 0,
        isLastPage: pageHistory.length === visitedTotalLength.current,
        referrer: state.__REACT_PAGE_TRACKER_INTERNAL__?.referrer ?? '',
        pageHistory,
        pageHistoryLength: visitedTotalLength.current,
        pageEvent,
      });
    };

    // save original popState, pushState
    const originalOnPopState = window.onpopstate;
    const originalPushState = history.pushState.bind(history);

    // override popState, pushState
    window.onpopstate = handlePopState;
    history.pushState = (state: unknown, title: string, url: string) => {
      if (strictModeDetector()) {
        return originalPushState(state, title, url);
      }
      const newPageIndex = (history.state.__REACT_PAGE_TRACKER_INTERNAL__?.pageIndex ?? 0) + 1;
      pageIndex.current = newPageIndex;
      const newPageHistory = pageTrackerStore.getImmutablePageHistory();
      newPageHistory.push(url);
      visitedTotalLength.current = newPageHistory.length;
      const newState = {
        pageIndex: newPageIndex,
        referrer: window.location.href,
        pageHistory: newPageHistory,
        pageHistoryLength: visitedTotalLength.current,
      };

      const stateWithPageInfo: HistoryCustomState = {
        ...(state as object),
        __REACT_PAGE_TRACKER_INTERNAL__: {
          ...newState,
        },
      };
      pageTrackerStore.setState({
        ...newState,
        isFirstPage: false,
        isLastPage: true,
        pageEvent: 'push',
      });

      debugLog(
        `pushState: stateWithPageInfo.pageIndex -->${stateWithPageInfo.__REACT_PAGE_TRACKER_INTERNAL__.pageIndex} ,pageIndex.current --> ${pageIndex.current} referrer -->${stateWithPageInfo.__REACT_PAGE_TRACKER_INTERNAL__.referrer}`,
      );

      return originalPushState(stateWithPageInfo, title || '', url || '');
    };

    return () => {
      window.onpopstate = originalOnPopState;
      history.pushState = originalPushState;
    };
  }, []);
};

const useStrictModeDetector = ({ enableStrictModeHandler }: PageTrackerProps) => {
  const counterRef = useRef(0);
  const isStrictMode = useRef(false);

  const isNextjs = () => {
    return !!history.state.__PRIVATE_NEXTJS_INTERNALS_TREE;
  };

  const detectorHandler = () => {
    counterRef.current++;
    if (isStrictMode.current) {
      return counterRef.current % 2 === 0;
    }
    return false;
  };

  return {
    initStrictModeDetector: () => {
      counterRef.current++;
      if (counterRef.current === 2) {
        isStrictMode.current = true;
      }
    },
    strictModeDetector: () => {
      if (enableStrictModeHandler === undefined) {
        if (isNextjs()) {
          return detectorHandler();
        }
        // if not Nextjs, we don't need to handle strict mode.
        return false;
      }

      if (enableStrictModeHandler) {
        return detectorHandler();
      }
      return false;
    },
  };
};

const debugLog = (message: string) => {
  if (DEBUG) {
    console.debug(`[DEBUG PAGE CHANGE] ${message}`);
  }
};

const initHistoryState = () => {
  const defaultData = {
    __REACT_PAGE_TRACKER_INTERNAL__: {
      pageIndex: 0,
      referrer: document.referrer,
      pageHistory: [window.location.pathname],
      pageHistoryLength: 1,
    } as Partial<PageTrackerState>,
  };

  if (typeof history.state === 'object' && history.state !== null) {
    history.replaceState(
      {
        ...history.state,
        ...defaultData,
      },
      location.href,
    );
  } else {
    history.replaceState(defaultData, '');
  }
  pageTrackerStore.setState(defaultData.__REACT_PAGE_TRACKER_INTERNAL__);
};
