import React from 'react';

let inline = (props, _editor, next) => {
  let {
    children,
    mark: { type },
    attributes,
  } = props;

  switch (type) {
    case 'bold':
      return <strong {...attributes}>{children}</strong>;

    case 'code':
      return <code {...attributes}>{children}</code>;

    case 'italic':
      return <em {...attributes}>{children}</em>;

    case 'underlined':
      return <u {...attributes}>{children}</u>;

    default: {
      return next();
    }
  }
};

export default inline;
