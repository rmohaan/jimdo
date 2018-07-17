import * as React from 'react';
import Form from './components/form'
import Header from './components/header';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Form />
    </div>
  );
}

export default App;