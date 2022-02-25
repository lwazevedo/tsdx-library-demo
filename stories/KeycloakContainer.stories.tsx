import React from 'react';
import { Meta, Story } from '@storybook/react';
import { KeycloakContainer, KeycloakContainerProps } from '../src/components';

const meta: Meta = {
  title: 'Keycloak Container',
  component: KeycloakContainer,
  args: {
    clientId: '1233',
    initOptions: {},
  },
  argTypes: {
    children: <p>Teste</p>,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<KeycloakContainerProps> = (args) => {
  return <KeycloakContainer {...args}>Mock children</KeycloakContainer>;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
