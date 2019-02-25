import React from 'react';
import gql from 'graphql-tag';
import { propType } from 'graphql-anywhere';
import { Link } from '@reach/router';

export default function Document({ document: { id, content, updatedAt } }) {
  return (
    <Link key={id} to={`/documents/edit/${id}`}>
      <div className={styles.Container}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <p className={styles.Date}>{toPrettyDate(updatedAt)}</p>
      </div>
    </Link>
  );
}

Document.fragments = {
  viewer: gql`
    fragment DocumentViewer on User {
      documents {
        id
        content
        updatedAt
      }
    }
  `,
};

Document.propTypes = {
  document: propType(Document.fragments.document),
};

let toPrettyDate = date => new Date(updatedAt).toLocaleDateString('en-US');
