import React, { lazy, Suspense } from 'react';

const LazyTab3 = lazy(() => import('./Tab3'));

const Tab3 = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyTab3 {...props} />
  </Suspense>
);

export default Tab3;
