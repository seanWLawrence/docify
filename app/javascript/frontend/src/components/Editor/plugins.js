import AutoReplace from 'slate-auto-replace';
import NoEmpty from 'slate-no-empty';
import CollapseOnEscape from 'slate-collapse-on-escape';

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

  // adds <hr /> on '---' or '==='
  AutoReplace({
    trigger: 'space',
    before: /^(---|===|\*\*\*|___)$/,
    change: (change, _e, _matches) =>
      change.setBlocks({ type: 'horizontal-rule' }),
  }),

  // start of word with either bold or italic
  AutoReplace({
    trigger: '*',
    before: /\s$/,
    change: (change, _e, _matches) => {
      let isItalic = change.value.marks.some(mark => mark.type === 'italic');

      // if it's already italic and we enter another '*',
      // we can assume we want bold instead
      if (isItalic) {
        return change.replaceMark('italic', 'bold');
      }

      return change.addMark({ type: 'italic' });
    },
  }),

  // end of word with either bold or italic
  AutoReplace({
    trigger: '*',
    before: /\w$/,
    change: (change, _e, _matches) => {
      let isItalic = change.value.marks.some(mark => mark.type === 'italic');

      if (isItalic) {
        return change.removeMark({ type: 'italic' });
      }

      change.removeMark({ type: 'bold' });
    },
  }),

  // start of word with either bold or italic
  AutoReplace({
    trigger: '_',
    before: /\s$/,
    change: (change, _e, _matches) => {
      let isItalic = change.value.marks.some(mark => mark.type === 'italic');

      // if it's already italic and we enter another '*',
      // we can assume we want bold instead
      if (isItalic) {
        return change.replaceMark('italic', 'bold');
      }

      return change.addMark({ type: 'italic' });
    },
  }),

  // end of word with either bold or italich
  AutoReplace({
    trigger: '_',
    before: /\w$/,
    change: (change, _e, _matches) => {
      let isItalic = change.value.marks.some(mark => mark.type === 'italic');

      if (isItalic) {
        return change.removeMark({ type: 'italic' });
      }

      change.removeMark({ type: 'bold' });
    },
  }),

  // start of word with either mark or strikethrough
  AutoReplace({
    trigger: '~',
    before: /\s$/,
    change: (change, _e, _matches) => {
      let isMarked = change.value.marks.some(mark => mark.type === 'mark');

      // if it's already marked and we enter another '~',
      // we can assume we want strikethrough instead
      if (isMarked) {
        return change.replaceMark('mark', 'strikethrough');
      }

      return change.addMark({ type: 'mark' });
    },
  }),

  // end of word with either bold or italic
  AutoReplace({
    trigger: '~',
    before: /\w$/,
    change: (change, _e, _matches) => {
      let isMarked = change.value.marks.some(mark => mark.type === 'mark');

      if (isMarked) {
        return change.removeMark('mark');
      }

      return change.removeMark({ type: 'strikethrough' });
    },
  }),
];
