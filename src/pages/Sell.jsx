import React, { useState } from 'react'
import Add from '../components/Add'
import Disview from '../components/Disview'








function Sell() {
  const[uploadResponse,setUploadResponse]=useState([])
  return (
    <div className=''>
   <div className='d-flex justify-content-between'>
      
    <div className='m-5'>
    <h2 className='fs-1 ' ><span className='text-danger'>Sell</span> your dream Property with us.</h2>
    <p className='mt-3'>Add or book your ideal property with just a single click.</p>

    </div>
      

  <img className='' style={{width:"300px",height:'220px'}} src='https://cdn.dribbble.com/users/127211/screenshots/1635050/house-animation-lag.gif' alt='img' />
 
      
   </div>
   <Add setUploadResponse={setUploadResponse}/>
    <Disview uploadResponse={uploadResponse}/>
  
  
    
    </div>
  )
}

export default Sell