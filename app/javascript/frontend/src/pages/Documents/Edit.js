import { hot } from 'react-hot-loader/root';

import Editor from '../../components/Editor';
import withQuery from '../../hoc/withQuery';
import viewerDocumentById from '../../queries/viewerDocumentById';
import updateDocumentTitle from '../../mutations/updateDocumentTitle';
import updateDocumentBody from '../../mutations/updateDocumentBody';
import updateDocumentIsPrivate from '../../mutations/updateDocumentIsPrivate';

let withData = withQuery(Editor)(viewerDocumentById, {
  variables: this.props.documentId,
});

export default hot(withData);
