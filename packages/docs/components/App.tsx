import React, { useState } from 'react';
import {
  Dots,
  EQ,
  Ripple,
  SlidingBars,
  SpinningCircles,
  Squares,
  Waves,
} from 'hang-tight-react';
import Section from './Section';
import './App.css';

const App: React.ComponentType = () => {
  const [animationEnabled, setAnimationEnabled] = useState(true);
  const onChange = ({ target }) => setAnimationEnabled(target.checked);
  return (
    <main>
      <h1>
        <span>Hang</span> <span>tight</span>
      </h1>
      <p>
        <a href="https://github.com/schne324/hang-tight">view on github</a>
      </p>
      <code>npm install --save hang-tight hang-tight-react</code>
      <label>
        <span>Enable amimation/motion</span>
        <input checked={animationEnabled} type="checkbox" onChange={onChange} />
      </label>
      <div className="grid">
        <Section name="Dots">
          <Dots paused={!animationEnabled} />
        </Section>
        <Section name="Squares" className="min">
          <Squares paused={!animationEnabled} />
        </Section>
        <Section name="Spinning Circles">
          <SpinningCircles paused={!animationEnabled} />
        </Section>
        <Section name="Ripple">
          <Ripple paused={!animationEnabled} />
        </Section>
        <Section name="EQ" className="min">
          <EQ paused={!animationEnabled} />
        </Section>
        <Section name="Sliding Bars">
          <SlidingBars paused={!animationEnabled} />
        </Section>
        <Section name="Waves">
          <Waves paused={!animationEnabled} />
        </Section>
      </div>
    </main>
  );
};

export default App;
