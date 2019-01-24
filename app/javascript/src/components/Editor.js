import React, { Component } from 'react';
import Types from 'prop-types';
import { Editor as Slate } from 'slate-react';
import CollapseOnEscape from 'slate-collapse-on-escape';
import AutoReplace from 'slate-auto-replace';

import renderNode from './Editor/renderNode';
import renderMark from './Editor/renderMark';
import isHotKey from 'is-hotkey';
import schema from './Editor/schema';

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

let Blockquote = AutoReplace({
  trigger: 'space',
  before: /^(>)$/,
  change: (event, _editor, _matches) =>
    event.setBlocks({ type: 'block-quote' }),
});

let Heading1 = AutoReplace({
  trigger: 'space',
  before: /^(#)$/,
  change: (event, _editor, _matches) => event.setBlocks({ type: 'heading1' }),
});

let Heading2 = AutoReplace({
  trigger: 'space',
  before: /^(##)$/,
  change: (event, _editor, _matches) => event.setBlocks({ type: 'heading2' }),
});

let Heading3 = AutoReplace({
  trigger: 'space',
  before: /^(###)$/,
  change: (event, _editor, _matches) => event.setBlocks({ type: 'heading3' }),
});

let Heading4 = AutoReplace({
  trigger: 'space',
  before: /^(####)$/,
  change: (event, _editor, _matches) => event.setBlocks({ type: 'heading4' }),
});

let Heading5 = AutoReplace({
  trigger: 'space',
  before: /^(#####)$/,
  change: (event, _editor, _matches) => event.setBlocks({ type: 'heading5' }),
});

let Heading6 = AutoReplace({
  trigger: 'space',
  before: /^(######)$/,
  change: (event, _editor, _matches) => event.setBlocks({ type: 'heading6' }),
});

let ListItem = AutoReplace({
  trigger: 'space',
  before: /(^(-)$)|(^(\*)$)|(^(\+)$)/,
  change: (event, _editor, _matches) => event.setBlocks({ type: 'list-item' }),
});

let Headings = [Heading1, Heading2, Heading3, Heading4, Heading5, Heading6];

export default class Editor extends Component {
  static propTypes = {
    value: Types.object.isRequired,
    onChange: Types.func,
  };

  static defaultProps = {
    onChange: () => {},
  };

  plugins = [
    ...KeyboardShortcutsPlugin,
    ...Headings,
    Blockquote,
    ListItem,
    CollapseOnEscape(),
  ];

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
        plugins={this.plugins}
        value={value}
        schema={schema}
        placeholder="Start writing here..."
      />
    );
  }
}
