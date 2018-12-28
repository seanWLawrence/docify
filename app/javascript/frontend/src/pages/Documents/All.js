import React from 'react';
import { Link } from '@reach/router';
import { Query } from 'react-apollo';

import viewerDocuments from '../../queries/viewerDocuments';
import styles from './All.module.scss';

let CreateDocumentButton = () => (
  <Link to="/documents/new" className={styles['Documents__Button--CreateNew']}>
    +
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
            let { id, title, updatedAt, body, isPrivate } = doc;

            let formattedUpdatedAt = new Date(updatedAt).toLocaleDateString(
              'en-US'
            );

            return (
              <Link key={id} to={`/documents/${id}`}>
                <div className={styles.Document__Container}>
                  <h2>{title}</h2>
                  <p>{body}</p>
                  <p className={styles.Document__Date}>{formattedUpdatedAt}</p>
                  {isPrivate && <p>Private</p>}
                </div>
              </Link>
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
