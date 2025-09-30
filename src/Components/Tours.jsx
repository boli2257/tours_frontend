import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getData } from '../utils'
import Mycard from './Mycard'


export const Tours = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        getData(setData)
    },[])
    data && console.log(data);
return (
    <div>
      {data && data.map(obj=><Mycard key={obj.id} {...obj}/>)}
    </div>
    
  )
}

