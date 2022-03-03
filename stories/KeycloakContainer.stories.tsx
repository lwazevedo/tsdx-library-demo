import React from 'react';
import { Meta, Story } from '@storybook/react';
import { KeycloakContainer, KeycloakContainerProps } from '../src/components';

const meta: Meta = {
  title: 'Keycloak Container',
  component: KeycloakContainer,
};

export default meta;

const Template: Story<KeycloakContainerProps> = (args) => (
  <KeycloakContainer {...args} />
);

export const Default = Template.bind({});

const defaultParams: KeycloakContainerProps = {
  children: 'Your application component',
  initOptions: {},
  configInit: {
    clientId: '1234',
    oidcProvider: {
      authorization_endpoint: 'Your authorization_endpoint',
      end_session_endpoint: 'Your end_session_endpoint',
      token_endpoint: 'Your token_endpoint',
    },
  },
};
Default.args = defaultParams;

export const ErrorRealmOrOidc = Template.bind({});
const errorRealOrOidcParams: KeycloakContainerProps = {
  children: 'Your application component',
  initOptions: {},
  configInit: { clientId: '1234' },
};
ErrorRealmOrOidc.args = errorRealOrOidcParams;

export const ErrorClientId = Template.bind({});
const errorClientIdParams: KeycloakContainerProps = {
  children: 'Your application component',
  initOptions: {},
  configInit: {},
};
ErrorClientId.args = errorClientIdParams;
