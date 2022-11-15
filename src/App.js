import React, { useState } from 'react'
import './App.css';
import { useGlobalContext } from './components/context';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  const { items, clearAll, total } = useGlobalContext()
  return (
    <div className="App">
      <Header />
      <div className='products-group'>

        <button className='clear' onClick={clearAll}>clear all</button>
        {
          items == 0 ?
            <h1>there are no items</h1>:
            items.map((item) => (
              <Product key={item.id} {...item} />
            ))
        }
        <div className='line' ></div>
        <div className='total'>
          <h3>total: {total} $</h3>
        </div>
      </div>

    </div>
  );
}

export default App;
