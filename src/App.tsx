import React from 'react';
import logo from './logo.svg';
import './App.css';


function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  )
}
function App() {
  return (
    <div>
      <h1> Welcome to Leads Application </h1>
      <MyButton title="Click me!" />
    </div>
  );
}

export default App;
