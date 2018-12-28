import { render } from 'react-dom';

import NewDocument from '../frontend/src/pages/Documents/New';
import withApolloProvider from '../frontend/src/hoc/withApolloProvider';

let root = document.getElementById('root');

render(withApolloProvider(NewDocument), root);
