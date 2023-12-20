import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Notfound() {
    const navigate=useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/home", {state:{isRedirect:true}})


        }, 3000)

    },[])

  return (
    <div>Notfound</div>
  )
}
