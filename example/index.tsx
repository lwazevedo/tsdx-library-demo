import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { KeycloakContainer } from '../src';

const App = () => {
  return (
    <div>
      <KeycloakContainer children={<p>Exemple</p>} initOptions={{}} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
