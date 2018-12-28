import React from 'react';
import { render, fireEvent, getAllByText } from 'react-testing-library';

import Button from './component-Button';

describe('Button', () => {
  it('should call click handler when clicked', () => {
    let onClick = jest.fn();

    let { getByText } = render(
      <Button onClick={onClick} text="Hello world!" />
    );

    let button = getByText('Hello world!');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
