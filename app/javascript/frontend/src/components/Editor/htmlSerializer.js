import Html from 'slate-html-serializer';

const BLOCK_TYPES = {
  blockquote: 'block-quote',
  ul: 'bulleted-list',
  li: 'list-item',
  h1: 'heading-one',
  h2: 'heading-two',
  h3: 'heading-three',
  h4: 'heading-four',
  h5: 'heading-five',
  h6: 'heading-six',
  p: 'paragraph',
};

// Add a dictionary of mark tags.
const INLINE_TYPES = {
  strong: 'bold',
  code: 'code',
  em: 'italic',
  u: 'underline',
};

let rules = [
  {
    deserialize(el, next) {
      let type = BLOCK_TYPES[el.tagName.toLowerCase()];

      if (type) {
        return {
          object: 'block',
          type,
          data: {
            className: el.getAttribute('class'),
          },
          nodes: next(el.childNodes),
        };
      }
    },

    serialize(obj, children) {
      if (obj.object === 'block') {
        switch (obj.type) {
          case 'block-quote':
            return <blockquote>{children}</blockquote>;

          case 'bulleted-list':
            return <ul>{children}</ul>;

          case 'heading-one':
            return <h1>{children}</h1>;

          case 'heading-two':
            return <h2>{children}</h2>;

          case 'heading-three':
            return <h3>{children}</h3>;

          case 'heading-four':
            return <h4>{children}</h4>;

          case 'heading-five':
            return <h5>{children}</h5>;

          case 'heading-six':
            return <h6>{children}</h6>;

          case 'list-item':
            return <li>{children}</li>;
        }
      }
    },
  },
  // Add a new rule that handles marks...
  {
    deserialize(el, next) {
      let type = INLINE_TYPES[el.tagName.toLowerCase()];

      if (type) {
        return {
          object: 'mark',
          type,
          nodes: next(el.childNodes),
        };
      }
    },

    serialize(obj, children) {
      if (obj.object === 'mark') {
        switch (obj.type) {
          case 'bold':
            return <strong>{children}</strong>;

          case 'code':
            return <code>{children}</code>;

          case 'italic':
            return <em>{children}</em>;

          case 'underlined':
            return <u>{childen}</u>;
        }
      }
    },
  },
];

export default new Html({ rules });
