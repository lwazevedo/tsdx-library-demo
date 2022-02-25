import React, { FC, ReactChild, useState, useEffect } from 'react';
import Keycloak, {
  KeycloakInitOptions,
  KeycloakConfig,
} from '../../lib/keycloak';
import { KeycloakProvider } from '../../context/keycloak-context';

export interface KeycloakContainerProps {
  children: ReactChild;
  initOptions?: KeycloakInitOptions;
  configInit?: KeycloakConfig;
}

export const KeycloakContainer: FC<KeycloakContainerProps> = ({
  children,
  initOptions = {},
  configInit = {},
}) => {
  const [state, setState] = useState<Keycloak | undefined>(undefined);

  const initial = async () => {
    const instance = new Keycloak(configInit);
    try {
      const auth = await instance.init(initOptions);
      if (auth) setState(instance);
      else instance.login();
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  useEffect(() => {
    initial();
  }, []);

  return <KeycloakProvider instance={state}>{children}</KeycloakProvider>;
};
