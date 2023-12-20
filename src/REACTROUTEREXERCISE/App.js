import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import Home from './pages/Home';
import Blog from './pages/Blog';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Profile from './pages/Profile';
import BlogLayout from './pages/BlogLayout';
import Sample from './pages/Sample';
import B from './pages/B';
import Notfound from './pages/Notfound';
import SearchQuary from './pages/SearchQuary';


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/root' element={<Navigate to={'/home'}/>} />
                <Route path='/home' element={<Home />} />
                <Route path='/sample' element={<Sample />} />
                <Route path='/query' element={<SearchQuary/>}/>

                <Route path='/blog' element={<BlogLayout />}>
                    <Route index element={<Blog />} />
                    {/* <Route path='blog1' element={<Blog1 />} />
                    <Route path='blog2' element={<Blog2 />} /> */}
                    <Route path=':blogId' element={<Blog1 />} />
                    <Route path='*' element={<div>no valid blog found</div>} />



                </Route>
                <Route path='about' element={<About />} />
                <Route path="profile/:profileId/:continentId" element={<Profile />} />
                <Route path="/a" element={<Link to="/b" state={{abc:10}}>redirect A</Link>}/>
                <Route path="/c" element={<Link to="/b" state={{xyz:20}}>redirect C</Link>}/>
                <Route path="d" element={<Link to="/b" state={{png:30}}>redirect D</Link>}/>
                <Route path="/b" element={<B/>}/>
                <Route path="/*" element={<Notfound/>}/>


            </Routes>


        </Router>
    )
}
