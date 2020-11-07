import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Row from 'react-bootstrap/Row';
import Header from './Header.js';
import Category from './Category.js';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {

  const [categories, setCategories] = useState([]);

  return (
    <div className="App">
      <Header categories={categories} setCategories={setCategories}/>   
      <Row className="justify-content-center">
        
        {categories.map( (category, index) => (
          <Category 
              name={category.name} 
              index={index} 
              categories={categories} 
              setCategories={setCategories} 
              key={category.id}/>
        ))}
      </Row>
    </div>
  );
}

export default App;
