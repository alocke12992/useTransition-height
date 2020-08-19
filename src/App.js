import React, { useState } from 'react';
import useMeasure from 'react-use-measure';
import './App.css';
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components';

const Animated = styled(animated.div)`
  height: 0;
  h1 {
    margin: 0;
  }
`;

function App() {
  const [showText, setShowText] = useState(false);
  const [ref, { height }] = useMeasure()
  const transition = useTransition(showText, {
    from: { opacity: 0, overflow: 'hidden', height: 0 },
    enter: { opacity: 1, height },
    leave: { opacity: 0, height: 0 },
  });
  console.log('height', height)

  return (
    <div className="App">
      <button onClick={() => setShowText(!showText)}>Toggle Slide</button>
      {transition((values) => (
        <Animated style={values}>
          <h1 ref={ref}>Hello</h1>
        </Animated>
      ))}
    </div>
  );
}

export default App;
