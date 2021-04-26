import React, { Fragment } from 'react';
import './styles/App.css';
import Example from './pages/example/';

function App() {
  return (
    <div className="bg-gray-100 p-5">
      <Example />
      <h1 className="p-5 m-5 bg-blue-600">hello tailwindcss</h1>
    </div>
  );
}

export default App;
