'use client';
import { usePageTrackerHandler } from './use-page-tracker-handler';

export type PageTrackerProps = {
  /**
   * ** Most of the time, you don't need to set this prop. It may cause some issues. **
   * ** If you are using remix, tanStack/query, react-router, you don't need to set this prop. **
   * ** If you are using nextjs 15, you have to set this prop to `false` manually. **
   * ** PS: DO NOT set `enableStrictModeHandler` to `true` in production. **
   *
   * In nextjs 14, strict mode will execute twice when push a page (e,g. click an Anchor link).
   * but in remix, tanstack/query, react-router, it will not execute twice. works good.
   * There's an automatic detection for nextjs strict mode, so you don't need to set this prop.
   *
   * But if your router library is not detected and push a page twice, you can set this prop to `true` to force enable strict mode detection.
   * The detector will filter the second pushState event for `pageHistory`.
   **/
  enableStrictModeHandler?: boolean;
};

export const PageTracker = (props: PageTrackerProps) => {
  usePageTrackerHandler(props);
  return null;
};
