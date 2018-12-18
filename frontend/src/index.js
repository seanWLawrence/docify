import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { QueryRenderer } from 'react-relay';
import { Editor as Slate } from 'slate-react';
import { Value } from 'slate';

import Button from './components/Button';
import Toolbar from './components/Toolbar';
import renderNode from '../lib/slate-types/block';
import renderMark from '../lib/slate-types/inline';
import environment from '../lib/relay-environment';
import { onKeyDown } from '../lib/utils';
import viewerQuery from './queries/viewer';

import initialValueAsJson from '../assets/demo.json';

let initialValue = Value.fromJSON(initialValueAsJson);

class Editor extends PureComponent {
  state = {
    value: initialValue,
  };
  /**
   * Check if the current selection has a mark with `type` in it.
   *
   */

  hasMark = type => {
    const { value } = this.state;
    return value.activeMarks.some(mark => mark.type == type);
  };

  /**
   * Check if the any of the currently selected blocks are of `type`.
   *
   */

  hasBlock = type => {
    const { value } = this.state;
    return value.blocks.some(node => node.type == type);
  };

  /**
   * Store a reference to the `editor`.
   */

  ref = editor => {
    this.editor = editor;
  };

  onChange = ({ value }) => this.setState({ value });

  /**
   * When a mark button is clicked, toggle the current mark.
   */

  onClickMark = ({ event, type }) => {
    event.preventDefault();
    this.editor.toggleMark(type);
  };

  /**
   * When a block button is clicked, toggle the block type.
   */

  onClickBlock = ({ event, type }) => {
    event.preventDefault();

    let { editor } = this;
    let { value } = editor;
    let { document } = value;

    // Handle everything but list buttons.
    if (type != 'bulleted-list' && type != 'numbered-list') {
      let isActive = this.hasBlock(type);
      let isList = this.hasBlock('list-item');

      if (isList) {
        editor
          .setBlocks(isActive ? 'paragraph' : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else {
        editor.setBlocks(isActive ? 'paragraph' : type);
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      let isList = this.hasBlock('list-item');
      let isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type == type);
      });

      if (isList && isType) {
        editor
          .setBlocks('paragraph')
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else if (isList) {
        editor
          .unwrapBlock(
            type == 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
          )
          .wrapBlock(type);
      } else {
        editor.setBlocks('list-item').wrapBlock(type);
      }
    }
  };

  renderMarkButton = ({ type, icon }) => {
    let isActive = this.hasMark(type);

    return (
      <Button
        onClick={event => this.onClickMark({ event, type })}
        text={icon}
      />
    );
  };

  renderBlockButton = ({ type, icon }) => {
    let isActive = this.hasBlock(type);

    if (['numbered-list', 'bulleted-list'].includes(type)) {
      const {
        value: { document, blocks },
      } = this.state;

      if (blocks.size > 0) {
        const parent = document.getParent(blocks.first().key);
        isActive = this.hasBlock('list-item') && parent && parent.type === type;
      }
    }

    return (
      <Button
        onClick={event => this.onClickBlock({ event, type })}
        text={icon}
      />
    );
  };

  render() {
    let { value } = this.state;

    return (
      <div>
        <Toolbar>
          {this.renderMarkButton({ type: 'bold', icon: 'B' })}
          {this.renderMarkButton({ type: 'italic', icon: 'I' })}
          {this.renderMarkButton({
            type: 'underlined',
            icon: '_',
          })}
          {this.renderMarkButton({ type: 'code', icon: '</>' })}
          {this.renderBlockButton({ type: 'heading-one', icon: 'H1' })}
          {this.renderBlockButton({ type: 'heading-two', icon: 'H2' })}
          {this.renderBlockButton({
            type: 'block-quote',
            icon: '"',
          })}
          {this.renderBlockButton({
            type: 'numbered-list',
            icon: 'List',
          })}
        </Toolbar>

        <QueryRenderer
          environment={environment}
          query={viewerQuery}
          variables={{}}
          render={({ error, props }) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }

            return (
              <div>
                {props.viewer.email} {props.viewer.id}
              </div>
            );
          }}
        />
        <Slate
          autofocus
          spellcheck
          defaultValue={initialValue}
          onKeyDown={onKeyDown}
          renderNode={renderNode}
          renderMark={renderMark}
          onChange={this.onChange}
          value={value}
          ref={this.ref}
        />
      </div>
    );
  }
}

let root = document.getElementById('root');

render(<Editor />, root);
