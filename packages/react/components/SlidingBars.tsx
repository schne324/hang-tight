import React from 'react';
import HangTight from './HangTight';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const SlidingBars: React.ComponentType<Props> = (props) => {
  const { 'aria-describedby': descBy = '', ...other } = props;
  // TODO: generate unique id?
  const id = 'sliding-bars-loading-text';
  return (
    <HangTight
      type="sliding-bars"
      {...other}
      aria-describedby={`${id} ${descBy}`}
    >
      <span id={id}>Loading...</span>
    </HangTight>
  );
};

export default SlidingBars;
