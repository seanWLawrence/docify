export default function onMark(event, editor, next) {
  let { addMark } = editor;

  event.preventDefault();

  switch (event.key) {
    case '`':
      addMark('code');
      break;

    case '_':
      addMark('italic');
      break;

    default:
      return next();
  }
}
