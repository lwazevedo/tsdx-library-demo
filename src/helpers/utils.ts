import Keycloak from '../lib/keycloak';

export const mockKeycloakInstance = new Keycloak({
  clientId: '1234',
  oidcProvider: {
    authorization_endpoint: 'Your authorization_endpoint',
    end_session_endpoint: 'Your end_session_endpoint',
    token_endpoint: 'Your token_endpoint',
  },
});
