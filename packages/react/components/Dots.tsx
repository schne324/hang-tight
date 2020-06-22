import React from 'react';
import HangTight from './HangTight';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  paused?: boolean;
}

const Dots: React.ComponentType<Props> = ({ count = 6, ...other }) => (
  <HangTight type="dots" {...other}>
    {Array.from({ length: count }, (_, index) => (
      <div key={index} />
    ))}
  </HangTight>
);

export default Dots;
