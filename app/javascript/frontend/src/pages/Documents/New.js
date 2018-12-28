import { hot } from 'react-hot-loader/root';

import Editor from '../../components/Editor';
import withMutation from '../../hoc/withMutation';
import createDocument from '../../mutations/createDocument';

let withData = withMutation(Editor)(createDocument, {});

export default hot(withData);
