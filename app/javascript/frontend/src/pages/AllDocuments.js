import React from 'react';
import Types from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { propType } from 'graphql-anywhere';
import { navigate } from '@reach/router';

import Document from '../components/Document';
import Spinner from '../components/Spinner';
import Toast from '../components/Toast';
import styles from './AllDocuments.module.scss';

let AllDocuments = ({
  data: {
    loading,
    error,
    viewer: { documents },
  },
  mutate,
}) => {
  if (error) {
    return (
      <Toast
        isVisible
        message={`There was an error loading your documents. ${error.message}`}
      />
    );
  }

  if (loading) {
    return <Spinner isLoading />;
  }

  let hasDocuments = documents.length > 0;

  return (
    <div className={styles.Container}>
      <CreateDocumentButton onClick={() => createDocument(mutate)} />

      {hasDocuments &&
        documents.map(document => (
          <Document
            key={id}
            document={filter(Document.fragments.document, document)}
          />
        ))}

      {!hasDocuments && <p>Let's create some documents!</p>}
    </div>
  );
};

AllDocuments.fragments = {
  viewer: gql`
    fragment DocumentsViewer on User {
      documents {
        id
        ...DocumentViewer
      }
    }
    ${Document.fragments.viewer}
  `,
};

AllDocuments.propTypes = {
  data: Types.shape({
    viewer: propType(Documents.fragments.documents, viewer).isRequired,
    loading: Types.bool,
    error: Types.object,
  }),
  mutate: Types.func.isRequired,
};

const DOCUMENTS_QUERY = gql`
  query Documents {
    viewer {
      ...AllDocumentsViewer
    }
  }
  ${AllDocuments.fragments.viewer}
`;

const CREATE_DOCUMENT_MUTATION = gql`
  mutation CreateDocument {
    createDocument {
      document {
        id
      }
    }
  }
`;

let CreateDocumentButton = onClick => (
  <button className={styles['Button--CreateNew']} onClick={onClick}>
    +
  </button>
);

let createDocument = mutate =>
  mutate({
    update(
      _cache,
      {
        data: {
          createDocument: { id },
        },
      }
    ) {
      if (id) {
        navigate(`/documents/edit/${id}`);
      }
    },
  });

export default compose(
  graphql(DOCUMENTS_QUERY),
  graphql(CREATE_DOCUMENT_MUTATION)
)(AllDocuments);
