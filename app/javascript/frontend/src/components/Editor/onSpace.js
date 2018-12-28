/**
 * On space, if it was after an auto-markdown shortcut, convert the current
 * node into the shortcut's corresponding type.
 */

export default function onSpace(event, editor, next) {
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
}
