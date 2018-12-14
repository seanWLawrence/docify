import { Editor } from 'slate';

declare module '*.json' {
  const value: any;
  export default value;
}

export interface SlateProps {
  attributes: string[];
  children: React.ReactChildren;
  node: {
    type: string;
  };

  mark: { type: string };
}

export type SlateEditor = Editor;

export type SlateNext = () => void;
