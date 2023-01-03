import React, { lazy, Suspense } from 'react';

const LazyTab2 = lazy(() => import('./Tab2'));

const Tab2 = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyTab2 {...props} />
  </Suspense>
);

export default Tab2;
