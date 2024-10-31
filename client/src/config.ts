import { RouteLayouts } from './types/RouteLayouts';

export const routeLayouts: RouteLayouts = {
  '/auth-mock': 'blank',
  '/auth': 'blank',
  '/': 'blank',
};

import type { MainMenu } from './types/menu';

export const AUTH_PATH = 'auth';
export const NOT_PERMITTED_PATH = 'not-permitted';

export const API_DATA = {
  URL: import.meta.env.VITE_API_HOST,
  AUTH: {
    username: '', // provide login to a user in given environment
    password: '', // provide password to a user in given environment
  },
};

export const mainMenu: MainMenu = [
  {
    index: 0,
    path: 'order-mgmt',
    title: 'Order Mgmt',
    icon: '',
    variant: 'solid'
  },
  {
    index: 1,
    path: 'trade-mgmt',
    title: 'Trade Mgmt',
    icon: '',
    variant: 'solid'
  },
  {
    index: 2,
    path: 'ref-data',
    title: 'Ref Data',
    icon: '',
    variant: 'solid'
  }
];
