import React from 'react';
import HangTight from './HangTight';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const SpinningCircles: React.ComponentType<Props> = ({ ...other }) => (
  <HangTight type="spinning-circles" {...other} />
);

export default SpinningCircles;
