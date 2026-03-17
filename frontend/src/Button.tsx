import {PropsWithChildren} from 'react';

export default function ({ children }: PropsWithChildren) {
  const x: number = 22;

  return (
    <div>{children}</div>
  );
}