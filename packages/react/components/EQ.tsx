import React from 'react';
import HangTight from './HangTight';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const EQ: React.ComponentType<Props> = ({ ...other }) => (
  <HangTight type="eq" {...other} />
);

export default EQ;
