import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';


export default function Nav() {
  return (

    <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>



    </ul>
    
  )
}


// // Q) how to use NavLink and what is the impact of using NavLink
// Q) what is the difference between Link and NavLink
// Q) discuss navigate case study => expline by coding
// Q) we have a single input field when user type something over hare and click Submit
// he will redirect to route => how will u achive it =>42min
// Q) how to use useLocation hook with useNavigate hook =>58 min
// 1hour 35min


