import React, { lazy, Suspense } from 'react';

const LazyTab1 = lazy(() => import('./Tab1'));

const Tab1 = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyTab1 {...props} />
  </Suspense>
);

export default Tab1;
