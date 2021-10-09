import 'react';

declare global {

}

declare module 'react' {
  // eslint-disable-next-line
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
