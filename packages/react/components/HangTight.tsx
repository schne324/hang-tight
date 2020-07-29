import React from 'react';
import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type:
    | 'dots'
    | 'eq'
    | 'ripple'
    | 'sliding-bars'
    | 'spinning-circles'
    | 'squares'
    | 'wave';
  paused?: boolean;
}

const HangTight: React.ComponentType<Props> = ({
  type,
  className,
  paused = false,
  ...other
}) => (
  <div
    className={classNames(`hang-tight__${type}`, className, {
      'hang-tight--paused': paused,
    })}
    role="progressbar"
    aria-valuetext="Loading"
    aria-busy="true"
    aria-valuemin={0}
    aria-valuemax={100}
    {...other}
  />
);

export default HangTight;
