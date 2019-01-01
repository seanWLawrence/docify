import React, { Component } from 'react';
import Types from 'prop-types';
import { Editor as Slate } from 'slate-react';

import renderNode from './renderNode';
import renderMark from './renderMark';
import isHotKey from 'is-hotkey';
import schema from './schema';

let MarkHotKey = ({ type, key }) => ({
  onKeyDown(event, editor, next) {
    if (!isHotKey(key, event)) return next();

    event.preventDefault();

    editor.toggleMark(type);
  },
});

let marks = [
  {
    type: 'bold',
    key: 'mod+b',
  },
  { type: 'code', key: 'mod+.' },
  { type: 'underlined', key: 'mod+u' },
  { type: 'deleted', key: 'mod+d' },
  { type: 'added', key: 'mod+h' },
  { type: 'italic', key: 'mod+i' },
];

let KeyboardShortcutsPlugin = marks.map(mark =>
  MarkHotKey({ type: mark.type, key: mark.key })
);

export default class Editor extends Component {
  static propTypes = {
    value: Types.object.isRequired,
    onChange: Types.func,
  };

  static defaultProps = {
    onChange: () => {},
  };

  render() {
    let { value, onChange } = this.props;

    return (
      <Slate
        autoFocus
        autoCorrect
        spellCheck
        renderNode={renderNode}
        renderMark={renderMark}
        onChange={onChange}
        plugins={KeyboardShortcutsPlugin}
        value={value}
        schema={schema}
        placeholder="Start writing here..."
      />
    );
  }
}
