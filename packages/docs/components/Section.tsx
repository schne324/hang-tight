import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  children: React.ReactNode;
}

const Section: React.ComponentType<Props> = ({ name, children, ...other }) => (
  <section {...other}>
    <h2>{name}</h2>
    {children}
    <button>view {name.toLowerCase()} code samples</button>
  </section>
);

export default Section;
