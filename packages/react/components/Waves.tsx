import React from 'react';
import HangTight from './HangTight';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const Waves: React.ComponentType<Props> = ({ ...other }) => (
  <HangTight type="wave" {...other}>
    <div />
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

export default Waves;
