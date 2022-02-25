import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as KeycloakContainer } from '../stories/KeycloakContainer.stories';

describe('KeycloakContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<KeycloakContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
