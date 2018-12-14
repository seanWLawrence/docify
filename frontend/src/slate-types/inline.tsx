import React from 'react';
import { SlateProps, SlateEditor, SlateNext } from '../index.d'

let inline = (props: SlateProps, _editor: SlateEditor, next: SlateNext): React.ReactNode | void => {
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
