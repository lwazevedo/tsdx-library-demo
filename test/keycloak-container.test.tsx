import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { composeStory } from '@storybook/testing-react';

import meta, {
  ErrorClientId,
  ErrorRealmOrOidc,
  Default,
} from '../stories/keycloak-container.stories';

afterEach(cleanup);

const RenderErrorClientId = composeStory(ErrorClientId, meta);
const RenderErrorRealmOrOidc = composeStory(ErrorRealmOrOidc, meta);
const RenderDefault = composeStory(Default, meta);

describe('KeycloakContainer', () => {
  it('renders without crashing', () => {
    render(<RenderDefault {...Default.args} />);
  });

  it('renders with error message due to lack of clientId parameter', () => {
    const { getByTestId } = render(
      <RenderErrorClientId {...ErrorClientId.args} />
    );
    const messageError = getByTestId('errorRender').textContent;
    expect(messageError).toBe('clientId missing');
  });

  it('renders with error message due to missing real or oidc parameters', () => {
    const { getByTestId } = render(
      <RenderErrorRealmOrOidc {...ErrorRealmOrOidc.args} />
    );
    const messageError = getByTestId('errorRender').textContent;
    expect(messageError).toBe('realm missing or oidc provider missing');
  });
});
