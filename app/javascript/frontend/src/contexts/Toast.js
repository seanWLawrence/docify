import { createContext } from 'react';

let defaultValue = {
  displayToastMessage: ({ message }) => message,
};

let Toast = createContext(defaultValue);

export default Toast;
