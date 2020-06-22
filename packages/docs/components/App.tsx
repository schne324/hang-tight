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
        <section>
          <h2>Dots</h2>
          <Dots paused={!animationEnabled} />
        </section>
        <section className="min">
          <h2>Squares</h2>
          <Squares paused={!animationEnabled} />
        </section>
        <section>
          <h2>Spinning Circles</h2>
          <SpinningCircles paused={!animationEnabled} />
        </section>
        <section>
          <h2>Ripple</h2>
          <Ripple paused={!animationEnabled} />
        </section>
        <section className="min">
          <h2>EQ</h2>
          <EQ paused={!animationEnabled} />
        </section>
        <section>
          <h2>SlidingBars</h2>
          <SlidingBars paused={!animationEnabled} />
        </section>
        <section>
          <h2>Waves</h2>
          <Waves paused={!animationEnabled} />
        </section>
      </div>
    </main>
  );
};

export default App;
