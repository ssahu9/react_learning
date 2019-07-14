import React from 'react';
import logo from './logo.svg';
import Ninjas from './Ninjas';

function App() {
  return (
    <div className="App">
      <h1>My first React app</h1>

      <Ninjas name="Prasad" age="26" belt="black" />
    </div>
  );
}

export default App;
