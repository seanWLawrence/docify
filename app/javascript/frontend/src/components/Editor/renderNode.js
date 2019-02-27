import React from 'react';
import Checkbox from '@components/Checkbox';

/**
 * Render an HTML element (aka Slate node)
 */
export default function renderNode(props, _editor, next) {
  let {
    attributes,
    children,
    node: { type, data },
  } = props;

  switch (type) {
    case 'paragraph':
      return <p {...attributes}>{children}</p>;

    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>;

    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>;

    case 'list-item':
      return <li {...attributes}>{children}</li>;

    case 'todo-list':
      return <Checkbox {...props} />;

    case 'heading1':
      return <h1 {...attributes}>{children}</h1>;

    case 'heading2':
      return <h2 {...attributes}>{children}</h2>;

    case 'heading3':
      return <h3 {...attributes}>{children}</h3>;

    case 'heading4':
      return <h4 {...attributes}>{children}</h4>;

    case 'heading5':
      return <h5 {...attributes}>{children}</h5>;

    case 'heading6':
      return <h6 {...attributes}>{children}</h6>;

    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;

    case 'code':
      return <code {...attributes}>{children}</code>;

    case 'link': {
      let href = data.get('href');
      let title = data.get('title');

      return (
        <a {...attributes} href={href} title={title}>
          {children}
        </a>
      );
    }

    case 'image': {
      let alt = data.get('alt');

      return <img {...attributes} src={src} alt={alt} />;
    }

    case 'embed': {
      let src = data.get('src');

      return (
        <span
          {...attributes}
          dangerouslySetInnerHTML={{ __html: data.get('src') }}
        />
      );
    }

    // TODO
    case 'table':
      return <table {...attributes}>{props.children}</table>;

    case 'table-row':
      return <tr {...attributes}>{props.children}</tr>;

    case 'table-head':
      return <th {...attributes}>{props.children}</th>;

    case 'table-cell':
      return <td {...attributes}>{props.children}</td>;

    default:
      return next();
  }
}
