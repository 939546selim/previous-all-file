import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import NotFound from './pages/NotFound';
import Home from './pages/Home';



export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<div>i am the base path</div>}/>
            
            <Route path='/Home'>
            <Route index element={<Home/>}/>
            <Route path='a' element={<div>a</div>}/>
            <Route path='b' element={<div>b</div>}/>
            <Route path='*'element={<div>not found</div>}/>


            </Route>
            <Route path='/Page1' element={<Page1/>}/>
            <Route path='/Page2' element={<Page2/>}/>
            <Route path='/Page3' element={<Page3/>}/>
            <Route path='*' element={<NotFound/>}/>


        </Routes>
        <Routes>
          <Route path='Contact' element={<div>Contact page</div>}/>


        </Routes>
    
    </BrowserRouter>
  )
}
