import React from 'react';
import { useSearchParams, createSearchParams, useLocation } from 'react-router-dom';

export default function SearchQuary() {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    console.log(location);
    const ourTest = searchParams.get("test");
    return (
        <>
            <div>the selected search queryparams is {ourTest}</div>
            {
                ['test1', 'test2', 'test3', 'test4'].map((test, index)=>{
                    return(
                        <div key={index}>
                            <label>{test}</label>
                            <input
                            type="radio"
                            value={test}
                            checked={ourTest===test}
                            onChange={(e)=>setSearchParams(createSearchParams({test:e.target.value}))}

                            
                            />

                        </div>

                    )

                })



            }

        </>

    )
}
