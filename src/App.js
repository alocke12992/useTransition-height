import React, { useState } from 'react';
import useMeasure from 'react-use-measure';
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components';

const Animated = styled(animated.div)`
  overflow: hidden;
  h1 {
    margin: 0;
  }
`;

function App() {
  const [animate, set] = useState(false);
  const [ref, { height }] = useMeasure()
  const transition = useTransition(animate, {
    from: { height: 0 },
    enter: { height },
    leave: { height: 0 },
    update: { height }
  });

  return (
    <div className="App">
      <a href="https://github.com/alocke12992/useTransition-height/blob/master/src/App.js" target="_blank" rel="noopener noreferrer">Github</a>
      <button onClick={() => set(!animate)}>Transition</button>
      {transition((values, item) => item && (
        <Animated style={values}>
          <h1 ref={ref}>Hello</h1>
        </Animated>
      ))}
    </div>
  );
}

export default App;
