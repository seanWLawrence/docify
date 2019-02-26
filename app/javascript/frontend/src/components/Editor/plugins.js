import AutoReplace from 'slate-auto-replace';
import NoEmpty from 'slate-no-empty';
import CollapseOnEscape from 'slate-collapse-on-escape';
import { last, isEqual, pipe, getOr } from 'lodash/fp';

export default [
  CollapseOnEscape(),

  NoEmpty('paragraph'),

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
      return change.setBlocks({ type: 'heading1' });
    },
  }),

  // inserts h2 with '##'
  AutoReplace({
    trigger: 'space',
    before: /^(##)$/,
    change: (change, _e, _matches) => {
      return change.setBlocks({ type: 'heading2' });
    },
  }),

  // inserts h3 with '###'
  AutoReplace({
    trigger: 'space',
    before: /^(###)$/,
    change: (change, _e, _matches) => {
      return change.setBlocks({ type: 'heading3' });
    },
  }),

  // inserts h4 with '####'
  AutoReplace({
    trigger: 'space',
    before: /^(####)$/,
    change: (change, _e, _matches) => {
      return change.setBlocks({ type: 'heading4' });
    },
  }),

  // inserts h5 with '#####'
  AutoReplace({
    trigger: 'space',
    before: /^(#####)$/,
    change: (change, _e, _matches) => {
      return change.setBlocks({ type: 'heading5' });
    },
  }),

  // inserts h6 with '######'
  AutoReplace({
    trigger: 'space',
    before: /^(######)$/,
    change: (change, _e, _matches) => {
      return change.setBlocks({ type: 'heading6' });
    },
  }),

  // inserts bulleted list with li when '-', '+', or '*' are typed
  AutoReplace({
    trigger: 'space',
    before: /^(-|\+|\*)$/,
    change: (change, _e, _matches) => {
      change.setBlocks({ type: 'list-item' });

      return change.wrapBlock('bulleted-list');
    },
  }),

  // inserts numbered list with li when '[number].' are typed
  AutoReplace({
    trigger: 'space',
    before: /^([1-9]\.)$/,
    change: (change, _e, _matches) => {
      change.setBlocks({ type: 'list-item' });

      return change.wrapBlock('numbered-list');
    },
  }),

  // adds checkbox on '[]'
  AutoReplace({
    trigger: 'space',
    before: /^(\[\])$/,
    change: (change, _e, _matches) => change.setBlocks({ type: 'todo-list' }),
  }),

  // formats inline code with '`'
  AutoReplace({
    trigger: '`',
    before: /.|^/,
    change: (change, _e, _matches) => change.toggleMark({ type: 'code' }),
  }),

  // formats code blocks with '```'
  AutoReplace({
    trigger: '```',
    before: /.|^/,
    change: (change, _e, _matches) => change.setBlocks({ type: 'code' }),
  }),

  // format bold or italic with '*' or '**'
  AutoReplace({
    trigger: '*',
    before: /.|^/,
    change: (change, _e, matches) => {
      let isItalic = change.value.marks.some(mark =>
        isEqual(mark.type, 'italic')
      );

      change.toggleMark({ type: 'italic' });

      if (!isStartOfWord(matches) && !isItalic) {
        return change.toggleMark({ type: 'bold' });
      }

      if (isStartOfWord(matches) && isItalic) {
        return change.replaceMark('italic', 'bold');
      }
    },
  }),

  // format bold or italic with '_' or '__'
  AutoReplace({
    trigger: '_',
    before: /.|^/,
    change: (change, _e, matches) => {
      let isItalic = change.value.marks.some(mark =>
        isEqual(mark.type, 'italic')
      );

      change.toggleMark({ type: 'italic' });

      if (!isStartOfWord(matches) && !isItalic) {
        return change.toggleMark({ type: 'bold' });
      }

      if (isStartOfWord(matches) && isItalic) {
        return change.replaceMark('italic', 'bold');
      }
    },
  }),

  // format marked or strikethrough with '~' or '~~'
  AutoReplace({
    trigger: '~',
    before: /.|^/,
    change: (change, _e, matches) => {
      let isMarked = change.value.marks.some(mark =>
        isEqual(mark.type, 'added')
      );

      change.toggleMark({ type: 'added' });

      if (!isStartOfWord(matches) && !isMarked) {
        return change.toggleMark({ type: 'deleted' });
      }

      if (isStartOfWord(matches) && isMarked) {
        return change.replaceMark('added', 'deleted');
      }
    },
  }),

  AutoReplace({
    trigger: /./,
    before: /(\[[A-Z]*\]\([A-Z]*\))/i,
    change: (change, _e, matches) => {
      console.log('LINK');
    },
  }),
];

let lastCharacter = pipe(
  getOr('', 'before.input'),
  last
);

let isStartOfWord = pipe(
  lastCharacter,
  isEqual(' ')
);
