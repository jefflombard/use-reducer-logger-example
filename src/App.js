import React, { Component, useReducer } from 'react';
import logger from 'use-reducer-logger';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter({initialState}) {
  const [state, dispatch] = useReducer(logger(reducer), initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter initialState={initialState} />
      </div>
    );
  }
}

export default App;
