let schema = {
  blocks: {
    heading1: { nodes: [{ objects: ['text'] }], marks: [''] },
    heading2: { nodes: [{ objects: ['text'] }], marks: [''] },
    heading3: { nodes: [{ objects: ['text'] }], marks: [''] },
    heading4: { nodes: [{ objects: ['text'] }], marks: [''] },
    heading5: { nodes: [{ objects: ['text'] }], marks: [''] },
    heading6: { nodes: [{ objects: ['text'] }], marks: [''] },
    'block-quote': { marks: [''] },
    table: {
      nodes: [{ types: ['table-row', 'table-head', 'table-cell'] }],
    },
    'horizontal-rule': {
      isVoid: true,
    },
    link: { nodes: [{ objects: ['text'] }] },
    'block-toolbar': {
      isVoid: true,
    },
  },
  document: {
    nodes: [
      {
        types: [
          'paragraph',
          'heading1',
          'heading2',
          'heading3',
          'heading4',
          'heading5',
          'heading6',
          'block-quote',
          'code',
          'horizontal-rule',
          'image',
          'bulleted-list',
          'ordered-list',
          'todo-list',
          'block-toolbar',
          'table',
          'link',
        ],
        min: 1,
      },
    ],
  },
};

export default schema;
