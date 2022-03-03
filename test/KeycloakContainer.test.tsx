import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { composeStory } from '@storybook/testing-react';
import Keycloak from '../src/lib/keycloak';
import * as hooks from '../src/hooks/useKeycloakInit';

import meta, {
  ErrorClientId,
  ErrorRealmOrOidc,
  Default,
} from '../stories/KeycloakContainer.stories';

afterEach(cleanup);
jest.mock('../src/lib/keycloak');

const RenderErrorClientId = composeStory(ErrorClientId, meta);
const RenderErrorRealmOrOidc = composeStory(ErrorRealmOrOidc, meta);
const RenderDefault = composeStory(Default, meta);

describe('KeycloakContainer', () => {
  it('renders without crashing', () => {
    jest
      .spyOn(hooks, 'useKeycloakInit')
      .mockImplementation(() => ({ error: '', state: new Keycloak() }));

    render(<RenderDefault {...Default.args} />);
  });

  it('renders with error message due to lack of clientId parameter', () => {
    jest.spyOn(hooks, 'useKeycloakInit').mockImplementation(() => ({
      error: 'clientId missing',
      state: undefined,
    }));
    const { getByTestId } = render(
      <RenderErrorClientId {...ErrorClientId.args} />
    );
    const messageError = getByTestId('errorRender').textContent;
    expect(messageError).toBe('clientId missing');
  });

  it('renders with error message due to missing real or oidc parameters', () => {
    jest.spyOn(hooks, 'useKeycloakInit').mockImplementation(() => ({
      error: 'realm missing or oidc provider missing',
      state: undefined,
    }));
    const { getByTestId } = render(
      <RenderErrorRealmOrOidc {...ErrorRealmOrOidc.args} />
    );
    const messageError = getByTestId('errorRender').textContent;
    expect(messageError).toBe('realm missing or oidc provider missing');
  });
});
