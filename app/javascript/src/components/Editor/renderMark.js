[@bs.deriving abstract]

type props = {
  mark: {
  [@bs.as "type"] type_: string,
  },
  [@bs.as "aria-label"]
  ariaLabel: string,
};

[@bs.val] external props: props = "props";


let renderMark = (props, _editor, next) => {
  


  let {
    children,
    mark: {type_},
    attributes,
  } = props;

  switch (type_) {
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

let default = renderMark;



