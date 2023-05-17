import React from 'react';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Main from './pages/main';
import "./App.css";



function App() {
  return (

    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
           
        </Routes>
      </BrowserRouter>

    </div>
 
  )
  
}

export default App;