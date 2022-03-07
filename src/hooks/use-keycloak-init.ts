import { useCallback, useEffect, useState } from 'react';
import Keycloak, { KeycloakInitOptions, KeycloakConfig } from '../lib/keycloak';

export const useKeycloakInit = (
  initOptions: KeycloakInitOptions,
  configInit: KeycloakConfig
) => {
  const [state, setState] = useState<Keycloak | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const initial = useCallback(async () => {
    const instance = new Keycloak(configInit);
    try {
      const auth = await instance.init(initOptions);
      if (auth) setState(instance);
      else instance.login();
    } catch (error) {
      console.log('hook', error);
      const message: string = (error as string) ?? 'An error occurred';
      setError(message);
    }
  }, [configInit, initOptions]);

  useEffect(() => {
    initial();
  }, [initial]);

  return { state, error };
};
