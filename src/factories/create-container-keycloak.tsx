import * as React from 'react';
import { KeycloakContainer } from '../components';
import { KeycloakConfig, KeycloakInitOptions } from '../lib/keycloak';
import { useKeycloakInit } from '../hooks/use-keycloak-init';

interface ICreateContainerKeycloakProps {
  children: React.ReactChild;
  initOptions?: KeycloakInitOptions;
  configInit?: KeycloakConfig;
}

export const CreateContainerKeycloak: React.FunctionComponent<ICreateContainerKeycloakProps> =
  (props) => {
    return (
      <KeycloakContainer {...props} useKeycloakInit={useKeycloakInit}>
        {props.children}
      </KeycloakContainer>
    );
  };
