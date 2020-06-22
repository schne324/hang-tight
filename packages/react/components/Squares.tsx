import React from 'react';
import HangTight from './HangTight';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const Squares: React.ComponentType<Props> = ({ ...other }) => (
  <HangTight type="squares" {...other}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </HangTight>
);

export default Squares;
