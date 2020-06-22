import React from 'react';
import HangTight from './HangTight';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const Ripple: React.ComponentType<Props> = ({ ...other }) => (
  <HangTight type="ripple" {...other}>
    <div />
    <div />
  </HangTight>
);

export default Ripple;
