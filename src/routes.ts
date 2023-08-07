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
  {
    path: '/introduce/the-movie',
    exact: true,
    element: lazy(() => import('@/pages/introduce/theMovie')),
  },
  {
    path: '/introduce/the-experience',
    exact: true,
    element: lazy(() => import('@/pages/introduce/theExperience')),
  },
];
