import React from 'react';

import blockTypes from '../block-types';

let props = type => ({
  attributes: {},
  node: {
    type,
  },
});

let _editor;

let next = jest.fn();

let callBlockTypes = nodeType => blockTypes(props(nodeType), _editor, next);

describe('blockTypes', () => {
  it('should return next when a block type does not match', () => {
    callBlockTypes('random');

    expect(next).toHaveBeenCalledTimes(1);
  });

  it('should return the correct element when the block type does match', () => {
    expect(callBlockTypes('block-quote')).toEqual(<blockquote />);
    expect(callBlockTypes('bulleted-list')).toEqual(<ul />);
    expect(callBlockTypes('heading-one')).toEqual(<h1 />);
    expect(callBlockTypes('heading-two')).toEqual(<h2 />);
    expect(callBlockTypes('heading-three')).toEqual(<h3 />);
    expect(callBlockTypes('heading-four')).toEqual(<h4 />);
    expect(callBlockTypes('heading-five')).toEqual(<h5 />);
    expect(callBlockTypes('heading-six')).toEqual(<h6 />);
    expect(callBlockTypes('list-item')).toEqual(<li />);
  });
});
