import React from 'react';
import './App.css';
import CategoryForm from './components/CategoryForm';
import CategoryList from './components/CategoryList';

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <CategoryForm />
      </div>
      <br />
      <div className="list-container">
        <CategoryList />
      </div>
    </div>
  );
}

export default App;
