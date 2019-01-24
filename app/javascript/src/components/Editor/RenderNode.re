/* Using raw helper since the spread attributes aren't valid in ReasonML */

let renderNode = [%raw
  {|
function (props, _editor, next) {
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

    case 'code':
      return <code {...attributes}>{props.children}</code>;

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

    case 'horizontal-rule':
      return <hr {...attributes} />;

    case 'image':
      return <img src={props.src} title={props.title} />;

    case 'link':
      return (
        <a href={props.href} {...attributes}>
          {children}
        </a>
      );

    case 'list-item':
      return <li {...attributes}>{children}</li>;

    case 'ordered-list':
      return <ol {...attributes}>{children}</ol>;

    case 'paragraph':
      return <p {...attributes}>{children}</p>;

    case 'table':
      return <table {...attributes}>{props.children}</table>;

    case 'table-cell':
      return <td {...attributes}>{props.children}</td>;

    case 'table-head':
      return <th {...attributes}>{props.children}</th>;

    case 'table-row':
      return <tr {...attributes}>{props.children}</tr>;

    case 'todo-list':
      return <ul {...attributes}>{props.children}</ul>;

    default:
      return next();
  }
}
|}
];

/**
 * Render an HTML element (aka Slate node)
 */
let default = renderNode;