import React from 'react';
import './App.css';
import RouterComponent from './router';

const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* <h1>Sign In</h1> */}
      <RouterComponent />
    </div>
  );
};

export default App;
