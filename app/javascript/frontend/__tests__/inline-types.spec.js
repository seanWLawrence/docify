import React from 'react';

import inlineTypes from '../inline-types';

let props = type => ({
  attributes: {},
  mark: {
    type,
  },
});

let _editor;

let next = jest.fn();

let callInlineTypes = nodeType => inlineTypes(props(nodeType), _editor, next);

describe('blockTypes', () => {
  it('should return next when an inline type does not match', () => {
    callInlineTypes('random');

    expect(next).toHaveBeenCalledTimes(1);
  });

  it('should return the correct element when the block type does match', () => {
    expect(callInlineTypes('bold')).toEqual(<strong />);
    expect(callInlineTypes('italic')).toEqual(<em />);
    expect(callInlineTypes('code')).toEqual(<code />);
    expect(callInlineTypes('underlined')).toEqual(<u />);
  });
});
