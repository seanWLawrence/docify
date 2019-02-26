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
    change: (change, _e, _matches) => change.setBlocks({ type: 'checkbox' }),
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
        isEqual(mark.type, 'marked')
      );

      change.toggleMark({ type: 'marked' });

      if (!isStartOfWord(matches) && !isMarked) {
        return change.toggleMark({ type: 'strikethrough' });
      }

      if (isStartOfWord(matches) && isMarked) {
        return change.replaceMark('marked', 'strikethrough');
      }
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
