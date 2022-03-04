import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  KeycloakContainer,
  KeycloakConfig,
  KeycloakInitOptions,
  KeycloakOnLoad,
} from '../src';

const convertStringToBoolean = (str: string): boolean => JSON.parse(str);

const configInit: KeycloakConfig = {
  clientId: process.env.REACT_APP_CLIENT_ID ?? '',
  credentials: {
    secret: process.env.REACT_APP_CREDENTIALS_SECRET ?? '',
  },
  oidcProvider: {
    authorization_endpoint: process.env.REACT_APP_AUTHORIZATION_ENDPOINT ?? '',
    token_endpoint: process.env.REACT_APP_TOKEN_ENDPOINT ?? '',
    end_session_endpoint: process.env.REACT_APP_END_SESSION_ENDPOINT ?? '',
  },
};

const initOptions: KeycloakInitOptions = {
  onLoad: (process.env.REACT_APP_ON_LOAD as KeycloakOnLoad) ?? 'login-required',
  useNonce: convertStringToBoolean(process.env.REACT_APP_USE_NONCE ?? 'false'),
  checkLoginIframe: convertStringToBoolean(
    process.env.REACT_APP_CHECK_LOGIN_IFRAME ?? 'false'
  ),
};

const App = () => {
  return (
    <div>
      <KeycloakContainer
        children={<p>Exemple</p>}
        initOptions={initOptions}
        configInit={configInit}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
