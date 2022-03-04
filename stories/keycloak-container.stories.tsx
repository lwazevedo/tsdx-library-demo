import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { KeycloakContainer, KeycloakContainerProps } from '../src/components';
import { mockKeycloakInstance } from '../src/helpers/utils';

export default {
  title: 'Keycloak Container',
  component: KeycloakContainer,
  argTypes: {
    useKeycloakInit: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<KeycloakContainerProps>;

const Template: Story<KeycloakContainerProps> = (args) => (
  <KeycloakContainer {...args} />
);

export const Default = Template.bind({});

const defaultParams: KeycloakContainerProps = {
  children: 'Your application',
  initOptions: {},
  configInit: {
    clientId: '1234',
    oidcProvider: {
      authorization_endpoint: 'Your authorization_endpoint',
      end_session_endpoint: 'Your end_session_endpoint',
      token_endpoint: 'Your token_endpoint',
    },
  },
  useKeycloakInit: () => ({ state: mockKeycloakInstance, error: undefined }),
};
Default.args = defaultParams;

export const ErrorRealmOrOidc = Template.bind({});
const errorRealOrOidcParams: KeycloakContainerProps = {
  children: 'Your application component',
  initOptions: {},
  configInit: { clientId: '1234' },
  useKeycloakInit: () => ({
    state: undefined,
    error: 'realm missing or oidc provider missing',
  }),
};
ErrorRealmOrOidc.args = errorRealOrOidcParams;

export const ErrorClientId = Template.bind({});
const errorClientIdParams: KeycloakContainerProps = {
  children: 'Your application component',
  initOptions: {},
  configInit: {},
  useKeycloakInit: () => ({
    state: undefined,
    error: 'clientId missing',
  }),
};
ErrorClientId.args = errorClientIdParams;
