import { Range } from 'slate';

function findTopParent(document, node) {
  let parent;
  while (node !== document) {
    parent = document.getParent(node.key);
    if (parent === document) return node;
    node = parent;
  }
}

export default function Embeds({ getComponent }) {
  return {
    validateNode(node) {
      if (!getComponent) return;
      if (node.object !== 'inline') return;
      if (node.type !== 'link') return;
      if (node.text !== node.data.get('href')) return;

      let component = getComponent(node);
      if (!component) return;

      return change => {
        let document = change.value.document;
        let parent = findTopParent(document, node);
        if (!parent) return;

        let firstText = parent.getFirstText();
        let range = Range.create({
          anchorKey: firstText.key,
          anchorOffset: parent.text.length,
          focusKey: firstText.key,
          focusOffset: parent.text.length,
        });

        return change.withoutNormalization(c => {
          c.removeNodeByKey(node.key).insertBlockAtRange(range, {
            object: 'block',
            type: 'link',
            isVoid: true,
            nodes: [
              {
                object: 'text',
                leaves: [{ text: '' }],
              },
            ],
            data: { ...node.data.toJS(), embed: true, component },
          });

          // Remove entire paragraph if link is the only item
          if (parent.type === 'paragraph' && parent.text === node.text) {
            c.removeNodeByKey(parent.key);
          }

          return change;
        });
      };
    },
  };
}
