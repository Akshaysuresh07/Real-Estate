import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function LandingPage() {
  return (
    <>
    
    <div>

   <div style={{width:'100%',height:'600px' ,}} id='headimg'>
   <h1 className='text-center '  style={{paddingLeft:"60%",paddingTop:'4%', overflow:'hidden', color:"white"}}>Uncover Your ideal<br></br> Sanctuary With Our Expert<br></br> Suppor</h1>
   </div>

<div className='d-flex p-4  justify-content-center   '>

<div className='d-flex justify-content-end  flex-wrap' style={{width:"60%"}} >
  <img className='m-4 rounded' style={{width:'250px',height:"200px"}} src='https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img'/>
  <img className='m-4 rounded' style={{width:'250px',height:"200px"}} src='https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img'/>
  <img className='m-4 rounded' style={{width:'250px',height:"200px"}} src='https://www.thehousedesigners.com/images/plans/01/HWD/bulk/7526/optimized-001-11_m.webp' alt='img'/>
  <img className='m-4 rounded' style={{width:'250px',height:"200px"}} src='https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img'/>
 
  
</div>
<div className='m-4' style={{width:"40%"}}>
  <h1 >Sell Plot with Us</h1>
<p style={{fontStyle:"italic"}} className='mt-4'>Our team of experts will help you find the perfect sanctuary for your needs. Whether you are looking for a new home or a vacation rental, we have the perfect solution for you. Our team of experts will help you find the perfect sanctuary for your needs. Whether you are looking for a new home or a vacation rental, we have the perfect solution for you.</p>
  <Button className='ps-5 pe-5 mt-3' variant="outline-success" ><Link to={"/Sell"} style={{textDecoration:'none',color:'black'}}>Sell Now </Link></Button>{' '}
</div>
</div>
<h1 className='text-center'>Popular Plots</h1>
<div className='d-flex p-4  justify-content-center   '>


<Card style={{ width: '18rem' }}>
<Card.Img style={{height:'200px'}} variant="top" src="https://images.pexels.com/photos/5071177/pexels-photo-5071177.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
<Card.Body>
  <Card.Title>Chennai,Tamil Nadu</Card.Title>
  <Card.Text style={{fontStyle:'italic'}}>
  2 BHK, 1200 sqft
  <br/>
  PRice: 40 Lakhs
</Card.Text>
 
</Card.Body>
</Card>
<Card className='ms-4' style={{ width: '18rem' }}>
<Card.Img style={{height:'200px'}} variant="top" src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card.Body>
  <Card.Title>Kollam,Kerala</Card.Title>
  <Card.Text style={{fontStyle:'italic'}}>
  5 BHK, 3000 sqft
  <br/>
  PRice: 75 Lakhs
</Card.Text>
</Card.Body>
</Card>
<Card className='ms-4' style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card.Body>
  <Card.Title>Trivandrum,Kerala</Card.Title>
  <Card.Text style={{fontStyle:'italic'}}>
    4BHK, 2500 sqft
    <br/>
    PRice: 40 Lakhs
  </Card.Text>
</Card.Body>
</Card>
<Card className='ms-4' style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card.Body>
  <Card.Title>Kochi,kerala</Card.Title>
  <Card.Text style={{fontStyle:'italic'}}>
  3 BHK, 2200 sqft
    <br/>
    PRice: 50 Lakhs
  </Card.Text>
 
</Card.Body>
</Card>
</div>


<div className='d-flex p-4  justify-content-center   '>





<div className='d-flex justify-content-end  flex-wrap' style={{width:"60%"}} >
  <img className='m-4 rounded' style={{width:'250px',height:"200px"}} src='https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img'/>
  <img className='m-4 rounded' style={{width:'250px',height:"200px"}} src='https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img'/>
  <img className='m-4 rounded' style={{width:'250px',height:"200px"}} src='https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img'/>
  <img className='m-4 rounded' style={{width:'250px',height:"200px"}} src='https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img'/>
 
  
</div>
<div className='m-4' style={{width:"40%"}}>
  <h1 >Buy House with Us</h1>
  <p style={{fontStyle:"italic"}} className='mt-4'>Our team of experts will help you find the perfect sanctuary for your needs. Whether you are looking for a new home or a vacation rental, we have the perfect solution for you. Our team of experts will help you find the perfect sanctuary for your needs. Whether you are looking for a new home or a vacation rental, we have the perfect solution for you.</p>
  <Button className='ps-5 pe-5 mt-3'  variant="outline-success"><Link to={"/Buy"} style={{color:'black', textDecoration:"none"}}>Buy Now</Link></Button>{' '}
</div>
</div>

  
    
    
    </div>

    </>
 


  )
}


export default LandingPage