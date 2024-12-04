import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Expensebox from './Expensebox';
import History from './History';
import AddTransaction from './Addtranscation';



const MyRoute = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Expensebox/>}/>
    <Route path="/history" element={<History/>}/>
    <Route path="/add-transaction" element={<AddTransaction/>} />
    </Routes>
    </BrowserRouter>   
    </>
  );
}

export default MyRoute
