import isHotKey from 'is-hotkey';

export default function KeyboardShortcuts(event, editor, next) {
  console.log('heyyy');
  return {
    onKeyDown(event, editor, next) {
      if (!isHotKey(event)) {
        switch (event.key) {
          case 'Enter':
            return this.onEnter(event, editor);
          case 'Tab':
            return this.onTab(event, editor);
          default:
        }
        return next();
      }

      switch (event.key) {
        case 'b':
          event.preventDefault();
          return this.toggleMark(editor, 'bold');
        case 'i':
          event.preventDefault();
          return this.toggleMark(editor, 'italic');
        case 'u':
          event.preventDefault();
          return this.toggleMark(editor, 'underlined');
        case 'd':
          event.preventDefault();
          return this.toggleMark(editor, 'deleted');
        case 'k':
          event.preventDefault();
          return editor.wrapInline({ type: 'link', data: { href: '' } });
        default:
          return next();
      }
    },

    toggleMark(editor, type) {
      let { value } = editor;
      // don't allow formatting of document title
      let firstNode = value.document.nodes.first();
      if (firstNode === value.startBlock) return;

      editor.toggleMark(type);
    },

    /**
     * On return, if at the end of a node type that should not be extended,
     * create a new paragraph below it.
     */
    onEnter(event, editor) {
      console.log('heyyy');
      let { value } = editor;
      if (value.isExpanded) return;

      let { startBlock, endOffset } = value;

      // Hitting enter at the end of the line reventerts to standard behavior
      if (endOffset === startBlock.length) return;

      // Hitting enter while an image is selected should jump caret below and
      // insert a new paragraph
      if (startBlock.type === 'image') {
        event.preventDefault();
        return editor.splitBlock(10).setBlocks({
          type: 'paragraph',
          text: '',
          isVoid: false,
        });
      }

      // Hitting enter in a heading or blockquote will split the node at that
      // point and make the new node a paragraph
      if (startBlock.type.match(/(heading|block-quote)/) && endOffset > 0) {
        event.preventDefault();
        return editor.splitBlock().setBlocks('paragraph');
      }
    },

    /**
     * On tab, if at the end of the heading jump to the main body content
     * as if it is another input field (act the same as enter).
     */
    onTab(event, editor) {
      let { value } = editor;

      if (value.startBlock.type === 'heading1') {
        event.preventDefault();
        editor.splitBlock().setBlocks('paragraph');
      }
    },
  };
}
