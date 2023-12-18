import React from 'react';
import Nav from './Nav';
import { useParams } from 'react-router-dom';

export default function Blog1() {
    const params=useParams();
    return (
        <>
            <Nav />
            <div>{`blog${params.blogId}`}</div>

        </>

    )
}
