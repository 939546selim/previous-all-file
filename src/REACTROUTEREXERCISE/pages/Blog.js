import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

export default function Blog() {
    return (
        <>

            <Nav />
            <ul>
                <li><Link to="/Blog/Blog1">Blog1</Link></li>
                <li><Link to="/Blog/Blog2">Blog2</Link></li>



            </ul>


        </>
    )
}
