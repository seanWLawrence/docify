import { render } from 'react-dom';

import EditDocument from '../frontend/src/pages/Documents/Edit';
import withApolloProvider from '../frontend/src/hoc/withApolloProvider';

let root = document.getElementById('root');

render(withApolloProvider(EditDocument), root);
