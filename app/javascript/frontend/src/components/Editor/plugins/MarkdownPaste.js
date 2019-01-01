import { getEventTransfer } from 'slate-react';
import { toSlate } from '../serializer';

export default function MarkdownPaste() {
  return {
    onPaste(event, change) {
      let transfer = getEventTransfer(event);
      let { text } = transfer;
      if (transfer.type !== 'text' && transfer.type !== 'html') return;

      let fragment = toSlate(text);
      change.insertFragment(fragment.document);

      return change;
    },
  };
}
