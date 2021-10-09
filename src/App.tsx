import React, { Fragment } from 'react';
import './styles/App.css';
import Example from './pages/example/';

function App() {
  return (
    <div className="bg-gray-100">
      <Example />
      <h1 className="p-5 m-5 bg-violet-500 rounded-lg">
        <span className="text-gray-100">hello tailwindcss</span>
      </h1>
    </div>
  );
}

export default App;
