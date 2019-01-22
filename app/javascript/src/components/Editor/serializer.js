import MarkdownSerializer from 'slate-md-serializer';

let { serialize: toMarkdown, deserialize: toSlate } = new MarkdownSerializer();

export { toMarkdown, toSlate };
