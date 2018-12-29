import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { Mutation, Query } from 'react-apollo';

import Editor from '../../components/Editor';
import {
  formatContentForSlate,
  formatContentFromSlate,
} from '../../components/Editor/htmlSerializer';
import viewerDocumentById from '../../queries/viewerDocumentById';
import updateDocumentContent from '../../mutations/updateDocumentContent';
import styles from './Edit.module.scss';

const SAVE_INTERVAL_IN_MILLISECONDS = 10000;

export default class EditDocument extends Component {
  static propTypes = {
    documentId: PropTypes.string.isRequired,
  };

  state = {
    content: null,
  };

  onChange({ value, updateDocumentContentMutation }) {
    let { documentId } = this.props;
    let { content } = this.state;

    if (content && value.document != content.document) {
      let debouncedMutation = debounce(
        updateDocumentContentMutation,
        SAVE_INTERVAL_IN_MILLISECONDS
      );

      debouncedMutation({
        variables: { documentId, content: formatContentFromSlate(value) },
      });
    }

    this.setState({ content: value });
  }

  render() {
    let { documentId } = this.props;
    let { content } = this.state;

    return (
      <div className={styles.Edit__Container}>
        <Query query={viewerDocumentById} variables={{ documentId }}>
          {({ data, error, loading }) => {
            if (error) {
              console.log(error);
              return <h1>There was an error loading your document...</h1>;
            } else if (loading) {
              return null;
            }

            let { content: queryContent } = data.document;

            return (
              <Mutation mutation={updateDocumentContent}>
                {(updateDocumentContentMutation, { data, loading, error }) => {
                  return (
                    <Editor
                      value={content || formatContentForSlate(queryContent)}
                      onChange={({ value }) =>
                        this.onChange({
                          value,
                          updateDocumentContentMutation,
                        })
                      }
                    />
                  );
                }}
              </Mutation>
            );
          }}
        </Query>
      </div>
    );
  }
}
