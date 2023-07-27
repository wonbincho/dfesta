import { lazy } from 'react';

export const routes = [
  {
    path: '/',
    exact: true,
    element: lazy(() => import('@/pages/Home')),
  },
  {
    path: '/introduce',
    exact: true,
    element: lazy(() => import('@/pages/introduce/index')),
  },
];
