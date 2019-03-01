import React from 'react';
import gql from 'graphql-tag';
import { propType } from 'graphql-anywhere';
import { Link } from '@reach/router';
import { Value } from 'slate';

import { fromSlate, toSlate } from '../Editor/htmlSerializer';
import styles from './index.module.scss';

export default function Document({ document: { id, content, updatedAt } }) {
  return (
    <Link key={id} to={`/documents/edit/${id}`}>
      <div className={styles.Container}>
        <div dangerouslySetInnerHTML={{ __html: toHtml(content) }} />
        <p className={styles.Date}>{toPrettyDate(updatedAt)}</p>
      </div>
    </Link>
  );
}

Document.fragments = {
  document: gql`
    fragment DocumentDocument on Document {
      id
      content
      updatedAt
    }
  `,
};

Document.propTypes = {
  document: propType(Document.fragments.document),
};

// TODO fix parsing error
let fromGraphQl = value => Value.fromJSON(JSON.parse(value));

let toHtml = value => fromSlate(fromGraphQl(value));

let toPrettyDate = date => new Date(date).toLocaleDateString('en-US');
