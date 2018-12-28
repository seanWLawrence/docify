import onSpace from './onSpace';
import onBackspace from './onBackspace';
import onEnter from './onEnter';
import onMark from './onMark';

/**
 * On key down, check for our specific key shortcuts.
 */

export default function onKeyDown(event, editor, next) {
  switch (event.key) {
    case ' ':
      return onSpace(event, editor, next);

    case 'Backspace':
      return onBackspace(event, editor, next);

    case 'Enter':
      return onEnter(event, editor, next);

    case '`':
      return onMark(event, editor, next);

    default:
      return next();
  }
}
