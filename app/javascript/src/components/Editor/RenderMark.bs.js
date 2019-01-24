'use strict';


var renderMark = ( function (props, _editor, next) {
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
);

var $$default = renderMark;

exports.renderMark = renderMark;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* renderMark Not a pure module */
