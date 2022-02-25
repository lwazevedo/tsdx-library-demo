import React, { FC, ReactChild, useState, useEffect } from 'react';
import Keycloak, {
  KeycloakConfig,
  KeycloakInitOptions,
} from '../../lib/keycloak';
import { KeycloakProvider } from '../../context/keycloak-context';

export interface KeycloakContainerProps extends KeycloakConfig {
  children: ReactChild;
  initOptions: KeycloakInitOptions;
}

export const KeycloakContainer: FC<KeycloakContainerProps> = ({
  children,
  initOptions,
  ...props
}) => {
  const [state, setState] = useState<Keycloak | undefined>(undefined);

  const initial = async () => {
    const instance = new Keycloak({ ...props });
    try {
      const auth = await instance.init(initOptions);
      if (auth) setState(instance);
      else instance.login();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initial();
  }, []);

  return <KeycloakProvider instance={state}>{children}</KeycloakProvider>;
};
