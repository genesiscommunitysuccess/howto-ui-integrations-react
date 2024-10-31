import type { AppMetadata } from '@genesislcap/foundation-shell/app';

/**
 * @public
 */
export const metadata: AppMetadata = {
  name: '@genesislcap/pbc-documents-ui',
  description: 'Genesis Documents PBC',
  version: '1.5.0-pre-release.6',
  prerequisites: {
    '@genesislcap/foundation-ui': '14.*',
    gsf: '8.*',
  },
  dependencies: {
    '@genesislcap/pbc-documents-ui': '0.0.12',
    serverDepId: '8.3.0-beta5',
  },
};
