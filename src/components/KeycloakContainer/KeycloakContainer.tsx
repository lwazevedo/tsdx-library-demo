import React, { FC, ReactChild } from 'react';
import { KeycloakInitOptions, KeycloakConfig } from '../../lib/keycloak';
import { KeycloakProvider } from '../../context/keycloak-context';
import { useKeycloakInit } from '../../hooks/useKeycloakInit';

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
  const { state, error } = useKeycloakInit(initOptions, configInit);
  if (error) return <p data-testid="errorRender">{error}</p>;
  return <KeycloakProvider instance={state}>{children}</KeycloakProvider>;
};
