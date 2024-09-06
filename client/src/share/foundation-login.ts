import {configure, define} from '@genesislcap/foundation-login';
import { AUTH_PATH } from '../config';
import { DI } from '@microsoft/fast-foundation';
import { history } from '../utils/history';

/**
 * Configure the micro frontend
 */
export const configureFoundationLogin = () => {
  configure(DI.getOrCreateDOMContainer(), {
    autoConnect: true,
    autoAuth: true,
    hostPath: AUTH_PATH,
    redirectHandler: () => {
      history.push('/order-mgmt');
    },
  });

  return define({
    name: `client-app-login`,
  });
};
