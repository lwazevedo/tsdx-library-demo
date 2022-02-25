import * as React from 'react';
import Keycloak from '../lib/keycloak';

const KeycloakContext = React.createContext<Keycloak | undefined>(undefined);

interface ProviderProps {
  children: React.ReactChild;
  instance: Keycloak | undefined;
}

const KeycloakProvider = ({ children, instance }: ProviderProps) => {
  return (
    <KeycloakContext.Provider value={instance}>
      {children}
    </KeycloakContext.Provider>
  );
};

const useKeycloak = () => {
  const context = React.useContext(KeycloakContext);
  if (context === undefined) {
    throw new Error('useKeycloak must be used within a KeycloakProvider');
  }
  return context;
};

export { KeycloakProvider, useKeycloak };
