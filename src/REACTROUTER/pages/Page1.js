import React from 'react';
import { Link } from 'react-router-dom';

export default function Page1() {
  return (
    <ul>

      <li><Link to={'/'}>base</Link></li>
      <li><Link to={'/Page2'}>Page2</Link></li>
      <li><Link to={'/Page3'}>Page3</Link></li>
      <li><Link to={'/skagajau'}>skagajau</Link></li>






    </ul>

  )
}
