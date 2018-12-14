import { SlateProps, SlateEditor, SlateNext } from './index.d';
/**
 * Get the block type for a series of auto-markdown shortcut `characters`.
 */
export let getBlockTypeFromCharacters = (characters: string): string | null => {
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
 * On key down, check for our specific key shortcuts.
 */

export let onKeyDown = (
  event: KeyboardEvent,
  editor: SlateEditor,
  next: SlateNext
): void => {
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

export let onMark = (
  event: KeyboardEvent,
  editor: SlateEditor,
  next: SlateNext
): void => {
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
 */

export let onSpace = (
  event: KeyboardEvent,
  editor: SlateEditor,
  next: SlateNext
): void => {
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
 */

export let onBackspace = (
  event: KeyboardEvent,
  editor: SlateEditor,
  next: SlateNext
): void => {
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
 */

export let onEnter = (
  event: KeyboardEvent,
  editor: SlateEditor,
  next: SlateNext
): void => {
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

  splitBlock(1).setBlocks('paragraph');
};
