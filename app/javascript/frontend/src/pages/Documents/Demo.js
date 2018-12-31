import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import Editor from '../../components/Editor';
import { formatContentForSlate } from '../../components/Editor/htmlSerializer';
import demoContent from '../../components/Editor/_demoFixture';
import styles from './Demo.module.scss';

class Demo extends Component {
  state = {
    content: formatContentForSlate(demoContent),
  };

  onChange = ({ value }) => this.setState({ content: value });

  render() {
    let { content } = this.state;

    return (
      <div className={styles.Demo__Container}>
        <Editor
          value={content}
          className={styles.Base}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default hot(Demo);
