import React from 'react';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const params=useParams();
  console.log(params);
  return (
    <>
    this is {params.profileId}.{params.profileId} lives in {params.continentId} 
    
    
    
    </>
   
  )
}
