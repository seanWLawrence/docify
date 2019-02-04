import AutoReplace from 'slate-auto-replace';
import InsertImages from 'slate-drop-or-paste-images';
import MarkHotkeys from 'slate-mark-hotkeys';
import NoEmpty from 'slate-no-empty';
import PasteLinkify from 'slate-paste-linkify';
import CollapseOnEscape from 'slate-collapse-on-escape';

export default [
  CollapseOnEscape(),

  NoEmpty('paragraph'),

  PasteLinkify(),

  // inserts block quote with '>'
  AutoReplace({
    trigger: 'space',
    before: /^(>)$/,
    change: (change, _e, _matches) => {
      return change.setBlocks({ type: 'block-quote' });
    },
  }),

  // inserts h1 with '#'
  AutoReplace({
    trigger: 'space',
    before: /^(#)$/,
    change: (change, _e, _matches) => {
      return change.setBlocks({ type: 'heading-one' });
    },
  }),

  // inserts h2 with '##'
  AutoReplace({
    trigger: 'space',
    before: /^(##)$/,
    change: (change, _e, _matches) => {
      return change.setBlocks({ type: 'heading-two' });
    },
  }),

  // inserts h3 with '###'
  AutoReplace({
    trigger: 'space',
    before: /^(###)$/,
    change: (change, _e, _matches) => {
      return change.setBlocks({ type: 'heading-three' });
    },
  }),

  // inserts h4 with '####'
  AutoReplace({
    trigger: 'space',
    before: /^(####)$/,
    change: (change, _e, _matches) => {
      return change.setBlocks({ type: 'heading-four' });
    },
  }),

  // inserts h5 with '#####'
  AutoReplace({
    trigger: 'space',
    before: /^(#####)$/,
    change: (change, _e, _matches) => {
      return change.setBlocks({ type: 'heading-five' });
    },
  }),

  // inserts h6 with '######'
  AutoReplace({
    trigger: 'space',
    before: /^(######)$/,
    change: (change, _e, _matches) => {
      return change.setBlocks({ type: 'heading-six' });
    },
  }),

  // inserts li with '-', '+', or '*'
  AutoReplace({
    trigger: 'space',
    before: /^(-)$/,
    change: (change, _e, _matches) => {
      return change.setBlocks({ type: 'list-item' });
    },
  }),

  // adds checkbox on '[]'
  AutoReplace({
    trigger: 'space',
    before: /^(\[\])$/,
    change: (change, _e, _matches) => change.setBlocks({ type: 'checkbox' }),
  }),

  // inserts images on paste
  InsertImages({
    extensions: ['png', 'jpg', 'jpeg', 'svg'],
    insertImage: (change, file) => {
      return change.insertBlock({
        type: 'image',
        isVoid: true,
        data: { file },
      });
    },
  }),
];
