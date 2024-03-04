import React from 'react'
import BuyCard from '../components/BuyCard'
import Disview from '../components/Disview'

function Buy() {
  return (
    <>
    <div className=''>
    <div className='d-flex justify-content-between'>
       
     <div className='m-5'>
     <h2 className='fs-1 ' ><span className='text-danger'>Buy</span> your dream Property with us.</h2>
     <p className='mt-3'>Add or book your ideal property with just a single click.</p>
 
     </div>
       
 
   <img className='' style={{width:"300px",height:'220px'}} src='https://cdn.dribbble.com/users/127211/screenshots/1635050/house-animation-lag.gif' alt='img' />
  
       
    </div>
   
     </div>

     <Disview/>

    </>
    

  )
}

export default Buy