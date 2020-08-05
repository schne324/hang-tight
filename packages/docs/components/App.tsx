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
import Refractor from 'react-refractor';
import powershell from 'refractor/lang/powershell';
import Section from './Section';
import './App.css';

Refractor.registerLanguage(powershell);

const App: React.ComponentType = () => {
  const [animationEnabled, setAnimationEnabled] = useState(true);
  const onChange = ({ target }) => setAnimationEnabled(target.checked);
  return (
    <main>
      <h1>
        <span>Hang</span> <span>tight</span>
      </h1>
      <h2>Accessible, pure css loaders.</h2>
      <p>
        <a href="https://github.com/schne324/hang-tight">view on github</a>
      </p>
      <Refractor
        className="Install"
        language="powershell"
        value="npm install --save hang-tight hang-tight-react"
      />
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
        <Section name="SpinningCircles">
          <SpinningCircles paused={!animationEnabled} />
        </Section>
        <Section name="Ripple">
          <Ripple paused={!animationEnabled} />
        </Section>
        <Section name="EQ" className="EQ min">
          <EQ paused={!animationEnabled} />
        </Section>
        <Section name="SlidingBars">
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
