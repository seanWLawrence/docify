import React, { Component } from 'react';
import Types from 'prop-types';
import { Editor as Slate } from 'slate-react';

import renderNode from './renderNode';
import renderMark from './renderMark';
import onKeyDown from './onKeyDown';
import plugins from './plugins';

export default class Editor extends Component {
  ref = editor => {
    this.editor = editor;
  };

  render() {
    let {
      ref,
      props: { onChange, value },
    } = this;

    return (
      <Slate
        autoFocus
        autoCorrect
        spellCheck
        renderNode={renderNode}
        renderMark={renderMark}
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={value}
        ref={ref}
        plugins={plugins}
        placeholder="Start writing here..."
      />
    );
  }

  static propTypes = {
    onChange: Types.func.isRequired,
    value: Types.object.isRequired,
  };
}
