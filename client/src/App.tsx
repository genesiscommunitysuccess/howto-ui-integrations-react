import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import { history, setApiHost } from './utils';
import LayoutWrapper from './layouts/LayoutWrapper';
import { AUTH_PATH, NOT_PERMITTED_PATH, routeLayouts } from './config';
import AuthGuard from './guards/AuthGuard';
import PermissionsGuard from './guards/PermissionsGuard';
import { AuthProvider } from './store/AuthContext';
// Pages Components
import AuthPage from './pages/AuthPage/AuthPage';
import NotPermittedPage from './pages/NotPermittedPage/NotPermittedPage';
import OrderMgmt from './pages/OrderMgmt/OrderMgmt';
import TradeMgmt from './pages/TradeMgmt/TradeMgmt';
import RefData from './pages/RefData/RefData';

// Genesis Components
import './share/genesis-components';

const LayoutWithLocation = () => {
  const location = useLocation();
  const layout = routeLayouts[location.pathname] || 'default';

  let pageComponent;
  let permissionCode = '';

  switch (location.pathname) {
    case `/${AUTH_PATH}`:
      pageComponent = <AuthPage />;
      break;
    case `/${NOT_PERMITTED_PATH}`:
      pageComponent = <NotPermittedPage />;
      break;
    case '/order-mgmt':
      pageComponent = <OrderMgmt />;
      permissionCode = '';
      break;
    case '/trade-mgmt':
      pageComponent = <TradeMgmt />;
      permissionCode = '';
      break;
    case '/ref-data':
      pageComponent = <RefData />;
      permissionCode = '';
      break;
    default:
      pageComponent = <AuthPage />;
  }

  if (
    location.pathname === '/auth' ||
    location.pathname === '/'
  ) {
    return <LayoutWrapper layout={layout}>{pageComponent}</LayoutWrapper>;
  } else {
    return (
      <AuthGuard>
        <PermissionsGuard permissionCode={permissionCode}>
          <LayoutWrapper layout={layout}>{pageComponent}</LayoutWrapper>
        </PermissionsGuard>
      </AuthGuard>
    );
  }
};

const App: React.FC = () => {
  setApiHost();

  return (
    <AuthProvider>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="*" element={<LayoutWithLocation />} />
        </Routes>
      </HistoryRouter>
    </AuthProvider>
  );
};

export default App;
