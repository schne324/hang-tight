import React from 'react';
import HangTight from './HangTight';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const Spinner: React.ComponentType<Props> = ({ ...other }) => (
  <HangTight type="spinner" {...other} />
);

export default Spinner;
