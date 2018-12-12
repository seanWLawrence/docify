import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { Editor as Slate } from 'slate-react';
import { Value } from 'slate';
import { isKeyHotkey } from 'is-hotkey';

import initialValueAsJson from './demo.json';

let initialValue = Value.fromJSON(initialValueAsJson);

let isBoldHotkey = isKeyHotkey('mod+b');
let isItalicHotkey = isKeyHotkey('mod+i');
let isUnderlinedHotkey = isKeyHotkey('mod+u');
let isCodeHotkey = isKeyHotkey('mod+`');

let Toolbar = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: 'max-content',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      boxShadow: '0 1px 9px #ddd',
      position: 'fixed',
      right: 0,
      backgroundColor: '#fff',
      zIndex: 2,
    }}
  >
    {children}
  </div>
);

let Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    style={{
      border: 0,
      padding: '10px 15px',
      maxWidth: 'max-content',
      margin: 10,
      cursor: 'pointer',
      color: 'cornflowerblue',
    }}
  >
    {text}
  </button>
);

let debounce = (fn, time) => {
  let timeout;

  return function() {
    const functionCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

/**
 * Get the block type for a series of auto-markdown shortcut `characters`.
 *
 * @param {String} chars
 * @return {String} block
 */
let getBlockTypeFromCharacters = characters => {
  switch (characters) {
    case '*':
    case '-':
    case '+':
      return 'list-item';

    case '>':
      return 'block-quote';

    case '#':
      return 'heading-one';

    case '##':
      return 'heading-two';

    case '###':
      return 'heading-three';

    case '####':
      return 'heading-four';

    case '#####':
      return 'heading-five';

    case '######':
      return 'heading-six';

    case '---':
      return 'horizontal-rule';

    // case '`':
    //   return 'code-inline';

    // case '```':
    //   return 'code-block';

    default:
      return null;
  }
};

/**
 * Render an HTML element (aka Slate node)
 *
 * @param {Object} props
 * @param {Editor} editor
 * @param {Function} next
 * @return {Element}
 */
let renderHTMLElement = (props, _editor, next) => {
  let {
    attributes,
    children,
    node: { type },
  } = props;

  switch (type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;

    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>;

    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>;

    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>;

    case 'heading-three':
      return <h3 {...attributes}>{children}</h3>;

    case 'heading-four':
      return <h4 {...attributes}>{children}</h4>;

    case 'heading-five':
      return <h5 {...attributes}>{children}</h5>;

    case 'heading-six':
      return <h6 {...attributes}>{children}</h6>;

    case 'list-item':
      return <li {...attributes}>{children}</li>;

    case 'horizontal-rule':
      return (
        <div
          {...attributes}
          style={{
            borderTop: '5px solid cornflowerblue',
            height: 10,
            width: '100%',
            display: 'block',
          }}
        >
          {children}
        </div>
      );

    default:
      return next();
  }
};

let renderHTMLElementStyle = (props, _editor, next) => {
  let {
    children,
    mark: { type },
    attributes,
  } = props;

  switch (type) {
    case 'bold':
      return <strong {...attributes}>{children}</strong>;

    case 'code':
      return <code {...attributes}>{children}</code>;

    case 'italic':
      return <em {...attributes}>{children}</em>;

    case 'underlined':
      return <u {...attributes}>{children}</u>;

    default: {
      return next();
    }
  }
};

/**
 * On key down, check for our specific key shortcuts.
 *
 * @param {Event} event
 * @param {Editor} editor
 * @param {Function} next
 */

let onKeyDown = (event, editor, next) => {
  switch (event.key) {
    case ' ':
      return onSpace(event, editor, next);

    case 'Backspace':
      return onBackspace(event, editor, next);

    case 'Enter':
      return onEnter(event, editor, next);

    case '`':
      return onMark(event, editor, next);

    default:
      return next();
  }
};

let onMark = (event, editor, next) => {
  let { addMark } = editor;

  event.preventDefault();

  switch (event.key) {
    case '`':
      addMark('code');
      break;

    case '_':
      addMark('italic');
      break;

    default:
      return next();
  }
};

/**
 * On space, if it was after an auto-markdown shortcut, convert the current
 * node into the shortcut's corresponding type.
 *
 * @param {Event} event
 * @param {Editor} editor
 * @param {Function} next
 */

let onSpace = (event, editor, next) => {
  let { value, setBlocks, wrapBlock, moveFocusToStartOfNode } = editor;

  let {
    selection: { start, isExpanded },
    startBlock,
  } = value;

  if (isExpanded) return next();

  let chars = startBlock.text.slice(0, start.offset).replace(/\s*/g, '');

  let type = getBlockTypeFromCharacters(chars);

  if (!type) return next();

  if (type == 'list-item' && startBlock.type == 'list-item') return next();
  if (type == 'code' && startBlock.type == 'code') return next();

  event.preventDefault();

  setBlocks(type);

  if (type == 'list-item') {
    wrapBlock('bulleted-list');
  }

  if (type == 'code') {
    wrapBlock('code');
  }

  moveFocusToStartOfNode(startBlock).delete();
};

/**
 * On backspace, if at the start of a non-paragraph, convert it back into a
 * paragraph node.
 *
 * @param {Event} event
 * @param {Editor} editor
 * @param {Function} next
 */

let onBackspace = (event, editor, next) => {
  let { value, unwrapBlock, setBlocks } = editor;

  let {
    selection: { isExpanded, start },
    startBlock,
  } = value;

  if (isExpanded) return next();

  if (start.offset != 0) return next();

  if (startBlock.type == 'paragraph') return next();

  event.preventDefault();

  setBlocks('paragraph');

  if (startBlock.type == 'list-item') {
    unwrapBlock('bulleted-list');
  }
};

/**
 * On return, if at the end of a node type that should not be extended,
 * create a new paragraph below it.
 *
 * @param {Event} event
 * @param {Editor} editor
 * @param {Function} next
 */

let onEnter = (event, editor, next) => {
  let { value, splitBlock } = editor;

  let {
    selection: { start, end, isExpanded },
    startBlock,
  } = value;

  if (isExpanded) return next();

  if (start.offset == 0 && startBlock.text.length == 0)
    return onBackspace(event, editor, next);

  if (end.offset != startBlock.text.length) return next();

  if (
    startBlock.type != 'heading-one' &&
    startBlock.type != 'heading-two' &&
    startBlock.type != 'heading-three' &&
    startBlock.type != 'heading-four' &&
    startBlock.type != 'heading-five' &&
    startBlock.type != 'heading-six' &&
    startBlock.type != 'block-quote'
    // startBlock.type != 'horizontal-rule'
  ) {
    return next();
  }

  event.preventDefault();

  splitBlock().setBlocks('paragraph');
};

interface State {
  value: JSON;
}

class Editor extends PureComponent<{}, State> {
  editor: Slate;

  state = {
    value: initialValue,
  };
  /**
   * Check if the current selection has a mark with `type` in it.
   *
   * @param {String} type
   * @return {Boolean}
   */

  hasMark = type => {
    const { value } = this.state;
    return value.activeMarks.some(mark => mark.type == type);
  };

  /**
   * Check if the any of the currently selected blocks are of `type`.
   *
   * @param {String} type
   * @return {Boolean}
   */

  hasBlock = type => {
    const { value } = this.state;
    return value.blocks.some(node => node.type == type);
  };

  /**
   * Store a reference to the `editor`.
   */

  ref = editor => {
    this.editor = editor;
  };

  onChange = ({ value }) => this.setState({ value });

  /**
   * When a mark button is clicked, toggle the current mark.
   *
   * @param {Event} event
   * @param {String} type
   */

  onClickMark = ({ event, type }) => {
    event.preventDefault();
    this.editor.toggleMark(type);
  };

  /**
   * When a block button is clicked, toggle the block type.
   *
   * @param {Event} event
   * @param {String} type
   */

  onClickBlock = ({ event, type }) => {
    event.preventDefault();

    let { editor } = this;
    let { value } = editor;
    let { document } = value;

    // Handle everything but list buttons.
    if (type != 'bulleted-list' && type != 'numbered-list') {
      let isActive = this.hasBlock(type);
      let isList = this.hasBlock('list-item');

      if (isList) {
        editor
          .setBlocks(isActive ? 'paragraph' : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else {
        editor.setBlocks(isActive ? 'paragraph' : type);
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      let isList = this.hasBlock('list-item');
      let isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type == type);
      });

      if (isList && isType) {
        editor
          .setBlocks('paragraph')
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else if (isList) {
        editor
          .unwrapBlock(
            type == 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
          )
          .wrapBlock(type);
      } else {
        editor.setBlocks('list-item').wrapBlock(type);
      }
    }
  };

  renderMarkButton = ({ type, icon }) => {
    let isActive = this.hasMark(type);

    return (
      <Button
        onClick={event => this.onClickMark({ event, type })}
        text={icon}
      />
    );
  };

  renderBlockButton = ({ type, icon }) => {
    let isActive = this.hasBlock(type);

    if (['numbered-list', 'bulleted-list'].includes(type)) {
      const {
        value: { document, blocks },
      } = this.state;

      if (blocks.size > 0) {
        const parent = document.getParent(blocks.first().key);
        isActive = this.hasBlock('list-item') && parent && parent.type === type;
      }
    }

    return (
      <Button
        onClick={event => this.onClickBlock({ event, type })}
        text={icon}
      />
    );
  };

  render() {
    let { value } = this.state;

    return (
      <div>
        <Toolbar>
          {this.renderMarkButton({ type: 'bold', icon: 'B' })}
          {this.renderMarkButton({ type: 'italic', icon: 'I' })}
          {this.renderMarkButton({
            type: 'underlined',
            icon: '_',
          })}
          {this.renderMarkButton({ type: 'code', icon: '</>' })}
          {this.renderBlockButton({ type: 'heading-one', icon: 'H1' })}
          {this.renderBlockButton({ type: 'heading-two', icon: 'H2' })}
          {this.renderBlockButton({
            type: 'block-quote',
            icon: '"',
          })}
          {this.renderBlockButton({
            type: 'numbered-list',
            icon: 'List',
          })}
        </Toolbar>

        <Slate
          autofocus
          spellcheck
          defaultValue={initialValue}
          onKeyDown={onKeyDown}
          renderNode={renderHTMLElement}
          renderMark={renderHTMLElementStyle}
          onChange={this.onChange}
          value={value}
          ref={this.ref}
        />
      </div>
    );
  }
}

let root = document.getElementById('root');

render(<Editor />, root);
