/**
 * Get the block type for a series of auto-markdown shortcut `characters`.
 */
export default function getBlockTypeFromCharacters(characters) {
  switch (characters) {
    case '*':
    case '-':
    case '+':
      return 'list-item';

    case '>':
      return 'block-quote';

    case '#':
      return 'heading-one';

    case '##':
      return 'heading-two';

    case '###':
      return 'heading-three';

    case '####':
      return 'heading-four';

    case '#####':
      return 'heading-five';

    case '######':
      return 'heading-six';

    default:
      return null;
  }
}
