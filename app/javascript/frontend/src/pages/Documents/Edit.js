import React, { Component } from 'react';
import Types from 'prop-types';
import debounce from 'lodash.debounce';
import { Mutation, Query } from 'react-apollo';

import Editor from '../../components/Editor';
import ToastContext from '../../contexts/Toast';
import {
  formatContentForSlate,
  formatContentFromSlate,
} from '../../components/Editor/serializer';
import viewerDocumentById from '../../queries/viewerDocumentById';
import updateDocumentContent from '../../mutations/updateDocumentContent';
import styles from './Edit.module.scss';

const SAVE_INTERVAL_IN_MILLISECONDS = 1000;

export default class EditDocument extends Component {
  static contextType = ToastContext;

  static propTypes = {
    documentId: Types.string.isRequired,
  };

  state = {
    content: null,
    toastIsVisible: false,
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
    let { displayToastMessage } = this.context;

    displayToastMessage({ message: 'Saved successfully...' });
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
              <Mutation
                mutation={updateDocumentContent}
                onCompleted={() =>
                  displayToastMessage({ message: 'Saved successfully...' })
                }
              >
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
