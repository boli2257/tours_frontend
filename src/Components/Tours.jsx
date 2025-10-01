import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getData } from '../utils'
import { Mycard } from './Mycard';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Tours = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        getData(setData)
    },[])
    data && console.log(data);
return (
    <div  className='mycontainer'>
      {data && data.map(obj=><Mycard key={obj.id} {...obj}/>)}
    </div>
    
  )
}

