export type PageTrackerState<UDATA extends Record<string, unknown> | undefined = undefined> = {
  pageIndex: number;
  referrer: string;
  isFirstPage?: boolean;
  pageEvent: 'next' | 'back' | 'push' | undefined;
  data?: UDATA;
};

export type PartialPageTrackerState<UDATA extends Record<string, unknown> | undefined> = Partial<
  PageTrackerState<UDATA>
>;
