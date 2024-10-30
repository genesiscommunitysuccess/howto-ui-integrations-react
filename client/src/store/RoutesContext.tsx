import React, { createContext, useContext, ReactNode } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import { getApp } from '@genesislcap/foundation-shell/app';
import AuthPage from '@/pages/AuthPage/AuthPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import NotPermittedPage from '@/pages/NotPermittedPage/NotPermittedPage';
import OrderMgmt from '@/pages/OrderMgmt/OrderMgmt';
import TradeMgmt from '@/pages/TradeMgmt/TradeMgmt';
import RefData from '@/pages/RefData/RefData';
import PBCContainer from '@/pbc/container';
import { AUTH_PATH, NOT_PERMITTED_PATH } from '@/config';

const routes = [
  {
    path: '',
    element: <Navigate to={AUTH_PATH} replace />,
  },
  {
    path: '/not-found',
    element: <NotFoundPage />,
  },
  {
    path: `/${AUTH_PATH}`,
    element: <AuthPage />,
  },
  {
    path: `/${NOT_PERMITTED_PATH}`,
    element: <NotPermittedPage />,
  },
  {
    path: '/order-mgmt',
    element: <OrderMgmt />,
    data: {
      permissionCode: '',
      navItems: [
        {
          navId: 'header',
          title: 'Order Mgmt',
          icon: {
            name: '',
            variant: 'solid',
          },
        },
      ],
    },
  },
  {
    path: '/trade-mgmt',
    element: <TradeMgmt />,
    data: {
      permissionCode: '',
      navItems: [
        {
          navId: 'header',
          title: 'Trade Mgmt',
          icon: {
            name: '',
            variant: 'solid',
          },
        },
      ],
    },
  },
  {
    path: '/ref-data',
    element: <RefData />,
    data: {
      permissionCode: '',
      navItems: [
        {
          navId: 'header',
          title: 'Ref Data',
          icon: {
            name: '',
            variant: 'solid',
          },
        },
      ],
    },
  },
];

const RoutesContext = createContext<RouteObject[]>([]);

export const RoutesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const pbcRoutes = getApp().routes.map((route) => ({
    title: route.title,
    path: `/${route.path}`,
    element: <PBCContainer />,
    data: {
      ...route.settings,
      pbcElement: route.element,
      // @ts-expect-error - getApp() is not typed to return the elementTag
      pbcElementTag: route.elementTag,
      navItems: route.navItems,
    },
  }));

  const allRoutes = [...routes, ...pbcRoutes];

  return <RoutesContext.Provider value={allRoutes}>{children}</RoutesContext.Provider>;
};

export const useRoutesContext = () => {
  return useContext(RoutesContext);
};