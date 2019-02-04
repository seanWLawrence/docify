import React from 'react';
import Types from 'prop-types';

import styles from './index.module.scss';

export default function Checkbox({
  editor,
  node,
  attributes,
  children,
  readOnly,
}) {
  let onChange = event =>
    editor.setNodeByKey(node.key, { data: { checked: event.target.checked } });

  let checked = node.data.get('checked');

  let contentStyles = !checked ? styles.Content : styles['Content--Checked'];

  return (
    <div {...attributes} className={styles.Container}>
      <span contentEditable={false}>
        <input type="checkbox" checked={checked} onChange={onChange} />
      </span>
      <span
        checked={checked}
        contentEditable={!readOnly}
        suppressContentEditableWarning
        className={contentStyles}
      >
        {children}
      </span>
    </div>
  );
}

Checkbox.propTypes = {
  editor: Types.object.isRequired,
  node: Types.object.isRequired,
  attributes: Types.object.isRequired,
  children: Types.node.isRequired,
  readOnly: Types.bool,
};

Checkbox.defaultProps = {
  readOnly: false,
};
