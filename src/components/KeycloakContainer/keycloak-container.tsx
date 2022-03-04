import React, { FC, ReactChild } from 'react';
import { KeycloakInitOptions, KeycloakConfig } from '../../lib/keycloak';
import { KeycloakProvider } from '../../context/keycloak-context';

export interface KeycloakContainerProps {
  children: ReactChild;
  useKeycloakInit: Function;
  initOptions?: KeycloakInitOptions;
  configInit?: KeycloakConfig;
}

export const KeycloakContainer: FC<KeycloakContainerProps> = ({
  children,
  useKeycloakInit,
  initOptions = {},
  configInit = {},
}) => {
  const { state, error } = useKeycloakInit(initOptions, configInit);

  if (error) return <p data-testid="errorRender">{error}</p>;
  else return <KeycloakProvider instance={state}>{children}</KeycloakProvider>;
};
