'use client';
import { useEffect, useRef } from 'react';
import { PageTrackerState } from './typed';
import { PageTrackerProps } from './page-tracker';
import { pageTrackerStore } from './page-tracker-store';

const DEBUG = false;
export type HistoryCustomState = {
  __REACT_PAGE_TRACKER_INTERNAL__: Pick<PageTrackerState, 'pageIndex' | 'referrer' | 'data'>;
};

export const usePageTrackerHandler = ({ initialData }: Pick<PageTrackerProps, 'initialData'>) => {
  const pageIndex = useRef(0);

  useEffect(() => {
    initHistoryState(initialData);

    /**
     * 處理 user 操作原生上、下一頁或頁面上自行加入的返回鍵時
     **/
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state as HistoryCustomState;
      const statePageIndex = state.__REACT_PAGE_TRACKER_INTERNAL__?.pageIndex ?? 0;
      const pageEvent = pageIndex.current > statePageIndex ? 'back' : 'next';
      if (pageEvent === 'next') {
        pageIndex.current++;
      } else {
        pageIndex.current = statePageIndex ?? 0;
      }
      pageTrackerStore.setState({
        pageIndex: pageIndex.current,
        data: state.__REACT_PAGE_TRACKER_INTERNAL__.data,
        isFirstPage: pageIndex.current === 0,
        referrer: state.__REACT_PAGE_TRACKER_INTERNAL__.referrer,
        pageEvent,
      });
    };

    // save original popState, pushState
    const originalOnPopState = window.onpopstate;
    const originalPushState = history.pushState.bind(history);

    // override popState, pushState
    window.onpopstate = handlePopState;
    history.pushState = (state: unknown, title: string, url?: string) => {
      const newPageIndex = (history.state.__REACT_PAGE_TRACKER_INTERNAL__?.pageIndex ?? 0) + 1;
      pageIndex.current = newPageIndex;
      const newState = {
        pageIndex: newPageIndex,
        referrer: window.location.href,
        data: undefined,
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

const debugLog = (message: string) => {
  if (DEBUG) {
    console.debug(`[DEBUG PAGE CHANGE] ${message}`);
  }
};

const initHistoryState = (initialData: Record<string, unknown> | undefined) => {
  const defaultData = {
    __REACT_PAGE_TRACKER_INTERNAL__: {
      pageIndex: 0,
      referrer: document.referrer,
      data: initialData,
    },
  };
  if (typeof history.state === 'object' && history.state !== null) {
    history.replaceState(
      {
        ...history.state,
        ...defaultData,
      },
      '',
    );
  } else {
    history.replaceState(defaultData, '');
  }
};
