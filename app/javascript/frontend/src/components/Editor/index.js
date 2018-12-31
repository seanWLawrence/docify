import React, { Component } from 'react';
import Types from 'prop-types';
import { Editor as Slate } from 'slate-react';
import Plain from 'slate-plain-serializer';

import renderNode from './nodes';
import renderMark from './marks';
import createPlugins from './plugins';

export default class Editor extends Component {
  static propTypes = {
    value: Types.object.isRequired,
    onChange: Types.func,
  };

  static defaultProps = {
    onChange: () => {},
  };

  setEditorRef = ref => {
    this.editor = ref;
  };

  focusAtEnd = () => {};

  render() {
    let { value, onChange } = this.props;

    let plugins = createPlugins({ getLinkComponent: () => {} });

    return (
      <Slate
        autoFocus
        autoCorrect
        spellCheck
        renderNode={renderNode}
        renderMark={renderMark}
        onChange={onChange}
        value={value}
        ref={this.setEditorRef}
        placeholder="Start writing here..."
      />
    );
  }
}
