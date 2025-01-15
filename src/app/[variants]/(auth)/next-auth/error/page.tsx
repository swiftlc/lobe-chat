'use client';

import { Suspense } from 'react';

import Page from './AuthErrorPage';

export default () => (
  <Suspense>
    <Page />
  </Suspense>
);
