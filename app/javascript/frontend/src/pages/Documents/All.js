import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link, navigate } from '@reach/router';

import viewerDocuments from '../../queries/viewerDocuments';
import createDocument from '../../mutations/createDocument';
import styles from './All.module.scss';

let CreateDocumentButton = () => (
  <Mutation mutation={createDocument}>
    {(createDocumentMutation, { data }) => {
      if (data) {
        let { id } = data.createDocument.document;

        navigate(`/documents/edit/${id}`);
      }
      return (
        <button
          className={styles['Documents__Button--CreateNew']}
          onClick={createDocumentMutation}
        >
          +
        </button>
      );
    }}
  </Mutation>
);

let Document = ({ id, content, updatedAt }) => (
  <Link key={id} to={`/documents/edit/${id}`}>
    <div className={styles.Document__Container}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <p className={styles.Document__Date}>{updatedAt}</p>
    </div>
  </Link>
);

let Documents = () => (
  <Query query={viewerDocuments}>
    {({ data, loading, error }) => {
      if (error) {
        return <h1>Sorry, there was an error...</h1>;
      }

      if (loading) {
        return null;
      }

      let { documents } = data.viewer;

      return (
        <div className={styles.Documents__Container}>
          <CreateDocumentButton />
          {documents.map(doc => {
            let { id, updatedAt, content } = doc;

            let formattedUpdatedAt = new Date(updatedAt).toLocaleDateString(
              'en-US'
            );

            return (
              <Document
                key={id}
                id={id}
                updatedAt={formattedUpdatedAt}
                content={content}
              />
            );
          })}
        </div>
      );
    }}
  </Query>
);

export default function AllDocuments() {
  return (
    <div>
      <Documents />
    </div>
  );
}
