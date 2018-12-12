import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { Editor as Slate } from 'slate-react';
import { Value } from 'slate';

import initialValueAsJson from './demo.json';

let initialValue = Value.fromJSON(initialValueAsJson);

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
  let { children, mark, attributes } = props;

  switch (mark.type) {
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

  event.preventDefault();

  setBlocks(type);

  if (type == 'list-item') {
    wrapBlock('bulleted-list');
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
    startBlock.type != 'block-quote' &&
    startBlock.type != 'horizontal-rule'
  ) {
    return next();
  }

  event.preventDefault();

  splitBlock().setBlocks('paragraph');
};

class Editor extends PureComponent {
  render() {
    return (
      <Slate
        defaultValue={initialValue}
        onKeyDown={onKeyDown}
        renderNode={renderHTMLElement}
        renderMark={renderHTMLElementStyle}
      />
    );
  }
}

let root = document.getElementById('root');

render(<Editor />, root);
