import React from 'react';

/**
 * Render an HTML element (aka Slate node)
 */
export default function blockTypes(props, _editor, next) {
  let {
    attributes,
    children,
    node: { type },
  } = props;

  switch (type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;

    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>;

    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>;

    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>;

    case 'heading-three':
      return <h3 {...attributes}>{children}</h3>;

    case 'heading-four':
      return <h4 {...attributes}>{children}</h4>;

    case 'heading-five':
      return <h5 {...attributes}>{children}</h5>;

    case 'heading-six':
      return <h6 {...attributes}>{children}</h6>;

    case 'list-item':
      return <li {...attributes}>{children}</li>;

    default:
      return next();
  }
}
