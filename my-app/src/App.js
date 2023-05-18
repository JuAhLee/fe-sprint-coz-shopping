import React from 'react';
//import React, { useEffect , useState} from 'react';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Product from './pages/Product'
import BookmarkPage from './pages/BookmarkPage'
import "./App.css";




function App() {

  

  return (

    <div className='app'>
   
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path = "/products/list" element={<Product />} />
          <Route path = "/bookmark" element={<BookmarkPage />} />
        </Routes>

      </BrowserRouter>
    

    </div>
 
  )
  
}

export default App;