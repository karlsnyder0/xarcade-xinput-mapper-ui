import React, { lazy, Suspense } from 'react';

const LazyTab4 = lazy(() => import('./Tab4'));

const Tab4 = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyTab4 {...props} />
  </Suspense>
);

export default Tab4;
