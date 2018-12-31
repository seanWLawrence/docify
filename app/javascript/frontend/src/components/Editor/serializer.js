import MarkdownSerializer from 'slate-md-serializer';

let serializer = new MarkdownSerializer();

export let formatContentForSlate = content => serializer.deserialize(content);
export let formatContentFromSlate = content => serializer.serialize(content);
