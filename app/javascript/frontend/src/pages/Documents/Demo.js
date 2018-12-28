import React from 'react';
import { hot } from 'react-hot-loader/root';

import Editor from '../../components/Editor';
import htmlSerializer from '../../components/Editor/htmlSerializer';
import demoContent from '../../components/Editor/_fixture';

let Demo = () => (
  <Editor initialValue={htmlSerializer.deserialize(demoContent)} />
);

export default hot(Demo);
