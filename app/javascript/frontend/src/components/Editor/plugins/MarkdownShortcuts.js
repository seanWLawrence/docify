let inlineShortcuts = [
  { mark: 'bold', shortcut: '**' },
  { mark: 'bold', shortcut: '__' },
  { mark: 'italic', shortcut: '*' },
  { mark: 'italic', shortcut: '_' },
  { mark: 'code', shortcut: '`' },
  { mark: 'added', shortcut: '++' },
  { mark: 'deleted', shortcut: '~~' },
];

export default function MarkdownShortcuts() {
  return {
    onKeyDown(event, change) {
      let { value } = change;
      let { startBlock } = value;
      if (!startBlock) return null;

      // markdown shortcuts should not be parsed in code
      if (startBlock.type.match(/code/)) return null;

      switch (event.key) {
        case '-':
          return this.onDash(event, change);
        case '`':
          return this.onBacktick(event, change);
        case ' ':
          return this.onSpace(event, change);
        case 'Backspace':
          return this.onBackspace(event, change);
        default:
          return null;
      }
    },

    /**
     * On space, if it was after an auto-markdown shortcut, convert the current
     * node into the shortcut's corresponding type.
     */
    onSpace(event, change) {
      let { value } = change;
      if (value.isExpanded) return;
      let { startBlock, startOffset } = value;

      let chars = startBlock.text.slice(0, startOffset).trim();
      let type = this.getType(chars);

      if (type) {
        if (type === 'list-item' && startBlock.type === 'list-item') return;
        event.preventDefault();

        let checked;
        if (chars === '[x]') checked = true;
        if (chars === '[ ]') checked = false;

        change
          .extendToStartOf(startBlock)
          .delete()
          .setBlocks(
            {
              type,
              data: { checked },
            },
            { normalize: false }
          );

        if (type === 'list-item') {
          if (checked !== undefined) {
            change.wrapBlock('todo-list');
          } else if (chars === '1.') {
            change.wrapBlock('ordered-list');
          } else {
            change.wrapBlock('bulleted-list');
          }
        }

        return true;
      }

      // no inline shortcuts should work in headings
      if (startBlock.type.match(/heading/)) return null;

      for (let key of inlineShortcuts) {
        // find all inline characters
        let { mark, shortcut } = key;
        let inlineTags = [];

        // only add tags if they have spaces around them or the tag is beginning
        // or the end of the block
        for (let i = 0; i < startBlock.text.length; i++) {
          let { text } = startBlock;
          let start = i;
          let end = i + shortcut.length;
          let beginningOfBlock = start === 0;
          let endOfBlock = end === text.length;
          let surroundedByWhitespaces = [
            text.slice(start - 1, start),
            text.slice(end, end + 1),
          ].includes(' ');

          if (
            text.slice(start, end) === shortcut &&
            (beginningOfBlock || endOfBlock || surroundedByWhitespaces)
          ) {
            inlineTags.push(i);
          }
        }

        // if we have multiple tags then mark the text between
        if (inlineTags.length > 1) {
          let firstText = startBlock.getFirstText();
          let firstCodeTagIndex = inlineTags[0];
          let lastCodeTagIndex = inlineTags[inlineTags.length - 1];
          return change
            .removeTextByKey(firstText.key, lastCodeTagIndex, shortcut.length)
            .removeTextByKey(firstText.key, firstCodeTagIndex, shortcut.length)
            .moveOffsetsTo(
              firstCodeTagIndex,
              lastCodeTagIndex - shortcut.length
            )
            .addMark(mark)
            .collapseToEnd()
            .removeMark(mark);
        }
      }
    },

    onDash(event, change) {
      let { value } = change;
      if (value.isExpanded) return;
      let { startBlock, startOffset } = value;
      if (startBlock.type.match(/heading/)) return null;

      let chars = startBlock.text.slice(0, startOffset).replace(/\s*/g, '');

      if (chars === '--') {
        event.preventDefault();
        return change
          .extendToStartOf(startBlock)
          .delete()
          .setBlocks(
            {
              type: 'horizontal-rule',
              isVoid: true,
            },
            { normalize: false }
          )
          .insertBlock('paragraph')
          .collapseToStart();
      }
    },

    onBacktick(event, change) {
      let { value } = change;
      if (value.isExpanded) return;
      let { startBlock, startOffset } = value;
      if (startBlock.type.match(/heading/)) return null;

      let chars = startBlock.text.slice(0, startOffset).replace(/\s*/g, '');

      if (chars === '``') {
        event.preventDefault();
        return change
          .extendToStartOf(startBlock)
          .delete()
          .setBlocks({ type: 'code' });
      }
    },

    onBackspace(event, change) {
      let { value } = change;
      let { startBlock, selection, startOffset } = value;

      // If image is selected delete the whole thing
      if (startBlock.type === 'image' || startBlock.type === 'link') {
        event.preventDefault();
        change.removeNodeByKey(startBlock.key).collapseToStartOfNextBlock();
        return change;
      }

      if (value.isExpanded) return;

      // If at the start of a non-paragraph, convert it back into a paragraph
      if (startOffset === 0) {
        if (startBlock.type === 'paragraph') return;
        event.preventDefault();

        change.setBlocks('paragraph');

        if (startBlock.type === 'list-item') {
          change.unwrapBlock('bulleted-list');
        }

        return change;
      }

      // If at the end of a code mark hitting backspace should remove the mark
      if (selection.isCollapsed) {
        let marksAtCursor = startBlock.getMarksAtRange(selection);
        let codeMarksAtCursor = marksAtCursor.filter(
          mark => mark.type === 'code'
        );

        if (codeMarksAtCursor.size > 0) {
          event.preventDefault();

          let textNode = startBlock.getTextAtOffset(startOffset);
          let charsInCodeBlock = textNode.characters
            .takeUntil((v, k) => k === startOffset)
            .reverse()
            .takeUntil((v, k) => !v.marks.some(mark => mark.type === 'code'));

          change.removeMarkByKey(
            textNode.key,
            startOffset - charsInCodeBlock.size,
            startOffset,
            'code'
          );
        }
      }
    },

    /**
     * Get the block type for a series of auto-markdown shortcut `chars`.
     */
    getType(chars) {
      switch (chars) {
        case '*':
        case '-':
        case '+':
        case '1.':
        case '[ ]':
        case '[x]':
          return 'list-item';
        case '>':
          return 'block-quote';
        case '#':
          return 'heading1';
        case '##':
          return 'heading2';
        case '###':
          return 'heading3';
        case '####':
          return 'heading4';
        case '#####':
          return 'heading5';
        case '######':
          return 'heading6';
        default:
          return null;
      }
    },
  };
}
