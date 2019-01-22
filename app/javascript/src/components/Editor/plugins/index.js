import PasteLinkify from 'slate-paste-linkify';
import CollapseOnEscape from 'slate-collapse-on-escape';
import TrailingBlock from 'slate-trailing-block';
import EditList from 'slate-edit-list';
import Ellipsis from './Ellipsis';
import Embeds from './Embeds';
import KeyboardShortcuts from './KeyboardShortcuts';
import MarkdownPaste from './MarkdownPaste';
import MarkdownShortcuts from './MarkdownShortcuts';

export default [
  CollapseOnEscape({ toEdge: 'end' }),
  EditList({
    types: ['ordered-list', 'bulleted-list', 'todo-list'],
    typeItem: 'list-item',
    typeDefault: 'paragraph',
  }),
  Ellipsis(),
  KeyboardShortcuts(),
  MarkdownPaste(),
  MarkdownShortcuts(),
  PasteLinkify({ type: 'link', collapseTo: 'end' }),
  TrailingBlock({ type: 'paragraph' }),
];
