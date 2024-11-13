import { useSyncExternalStore } from 'react';
import { PageTrackerState, PartialPageTrackerState } from './typed';

const INITIAL_STATE: PageTrackerState<Record<string, unknown>> = {
  pageIndex: 0,
  referrer: '',
  pageEvent: undefined,
  isFirstPage: true,
  data: {},
};

export const pageTrackerStore = {
  state: {
    ...INITIAL_STATE,
  } as PageTrackerState,
  listeners: new Set<() => void>(),

  // 獲取當前狀態
  getState<UDATA extends Record<string, unknown> | undefined>(): PageTrackerState<UDATA> {
    return this.state as PageTrackerState<UDATA>;
  },

  // 更新狀態並通知所有訂閱者
  setState: <UDATA extends Record<string, unknown> | undefined>(
    newState: PartialPageTrackerState<UDATA>,
  ) => {
    pageTrackerStore.state = {
      ...pageTrackerStore.state,
      ...newState,
    } as PageTrackerState;
    requestAnimationFrame(() => {
      pageTrackerStore.listeners.forEach((listener) => listener());
    });
  },

  // 訂閱狀態變化
  subscribe: (listener: () => void) => {
    pageTrackerStore.listeners.add(listener);
    return () => pageTrackerStore.listeners.delete(listener); // 返回取消訂閱的函數
  },
};

export const usePageTrackerStore = <UDATA extends Record<string, unknown> | undefined, T = UDATA>(
  selector: (state: PageTrackerState<UDATA>) => T,
): T => {
  let lastSelected: T;

  return useSyncExternalStore(
    pageTrackerStore.subscribe,
    () => {
      const selected = selector(pageTrackerStore.getState<UDATA>());

      // 僅當選擇的值發生改變時才更新
      if (JSON.stringify(lastSelected) !== JSON.stringify(selected)) {
        lastSelected = selected;
      }
      return lastSelected;
    },
    () => INITIAL_STATE as T,
  );
};
