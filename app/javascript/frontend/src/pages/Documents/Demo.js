import React from 'react';
import { hot } from 'react-hot-loader/root';

import Editor from '../../components/Editor';
import htmlSerializer from '../../components/Editor/htmlSerializer';
import demoContent from '../../components/Editor/_demoFixture';
import styles from './Demo.module.scss';

let Demo = () => (
  <div className={styles.Demo__Container}>
    <Editor
      initialValue={htmlSerializer.deserialize(demoContent)}
      className={styles.Base}
    />
  </div>
);

export default hot(Demo);
