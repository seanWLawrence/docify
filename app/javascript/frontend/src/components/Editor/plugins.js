import AutoReplace from 'slate-auto-replace';
import NoEmpty from 'slate-no-empty';
import CollapseOnEscape from 'slate-collapse-on-escape';
import {
  first,
  split,
  last,
  isEqual,
  pipe,
  getOr,
  tail,
  join,
} from 'lodash/fp';

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

  // create links on [link text](href)'
  AutoReplace({
    trigger: /./,
    before: /([^!]\[.*\]\(.*\))/i,
    change: (change, _e, matches) => {
      change
        .insertText(title(matches))
        .moveFocusBackward(title(matches).length)
        .wrapInline({
          type: 'link',
          data: { href: href(matches), title: title(matches) },
        })
        .moveToEnd();
    },
  }),

  // create images on '![alt text](src)'
  AutoReplace({
    trigger: /./,
    before: /(!\[.*\]\(.*\))/i,
    change: (change, _e, matches) => {
      change
        .insertText(alt(matches))
        .moveFocusBackward(alt(matches).length)
        .wrapInline({
          type: 'image',
          data: { src: src(matches), alt: alt(matches) },
        })
        .moveToEnd();
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

let log = value => {
  console.log(value);
  return value;
};

let linkData = pipe(
  getOr('', 'before[0]'),
  split('](')
);

let title = pipe(
  linkData,
  first,
  tail,
  join('')
);

let href = pipe(
  linkData,
  last,
  split(')'),
  first
);

let alt = pipe(
  linkData,
  first,
  tail,
  tail,
  join('')
);

let src = href;
