import isHotKey from 'is-hotkey';

export default function Ellipsis() {
  return {
    onKeyDown(event, change) {
      if (!isHotKey(event) && event.key === ' ') {
        return this.onSpace(event, change);
      }

      return null;
    },

    onSpace(_event, change) {
      let { value } = change;
      if (value.isExpanded) return;

      let { startBlock } = value;
      if (startBlock.type.match(/code/)) return;

      let startOffset = value.startOffset - 3;
      let textNode = startBlock.getFirstText();
      if (!textNode) return;

      let chars = textNode.text.slice(startOffset, startOffset + 3);

      // replaces three periods with the proper ellipsis character.
      if (chars === '...') {
        return change
          .removeTextByKey(textNode.key, startOffset, 3)
          .insertTextByKey(textNode.key, startOffset, '…');
      }
    },
  };
}
