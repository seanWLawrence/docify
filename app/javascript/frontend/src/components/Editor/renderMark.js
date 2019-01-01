import React from 'react';

export default function renderMark(props, _editor, next) {
  let {
    children,
    mark: { type },
    attributes,
  } = props;

  switch (type) {
    case 'added':
      return <mark {...attributes}>{children}</mark>;

    case 'bold':
      return <strong {...attributes}>{children}</strong>;

    case 'code':
      return <code {...attributes}>{children}</code>;

    case 'deleted':
      return <del {...attributes}>{children}</del>;

    case 'italic':
      return <em {...attributes}>{children}</em>;

    case 'underlined':
      return <u {...attributes}>{children}</u>;

    default: {
      return next();
    }
  }
}
