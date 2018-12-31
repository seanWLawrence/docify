import { getEventTransfer } from 'slate-react';
import { formatContentForSlate } from '../serializer';

export default function MarkdownPaste() {
  return {
    onPaste(event, change) {
      let transfer = getEventTransfer(event);
      let { text } = transfer;
      if (transfer.type !== 'text' && transfer.type !== 'html') return;

      let fragment = formatContentForSlate(text);
      change.insertFragment(fragment.document);

      return change;
    },
  };
}
