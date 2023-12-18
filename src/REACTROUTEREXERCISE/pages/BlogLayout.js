import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function BlogLayout() {
    const DEFAULT_RESOURCES = '/blog';
    return (
        <>
            <Outlet/>
            <nav>
                <ul>
                    <li>
                        <Link to={`${DEFAULT_RESOURCES}/1`}>Blog1</Link>
                    </li>
                    <li>
                        <Link to={`${DEFAULT_RESOURCES}/2`}>Blog2</Link>
                    </li>
                    <li>
                        <Link to={`${DEFAULT_RESOURCES}/3`}>Blog3</Link>
                    </li>








                </ul>





            </nav>

           




        </>


    )
}
