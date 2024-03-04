/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addFavouriteApi, deletePlotApi } from '../services/allApis';

function BuyCard({ displayData, setDeleteVideoResponse}) {
  const [lgShow, setLgShow] = useState(false);
  const [plotFav, setPlotFav] = useState(false);
  const handleShow = () => setLgShow(true);

  const handleRemove=async(id)=>{
    const result=await deletePlotApi(id)
    console.log(result.data);
    setDeleteVideoResponse(result.data)



  }
  const handleFavourite=async()=>{
    setPlotFav(true)
    const{houseName,id, imageUrl,houseSpecification,price,videoUrl}=displayData

    await addFavouriteApi({houseName,imageUrl,id,houseSpecification,price,videoUrl})
  alert(` ${houseName}Added to favourite`)

  }



  return (

    <div className='d-flex mt-5 ms-3'>

      <Card style={{ width: '18rem' }}>

        <Card.Img style={{ width: '100%', height: '36vh' }} variant="top" src={displayData?.imageUrl} />
        <Card.Body style={{ height: "190px" }} >
          <div className="d-flex justify-content-between">
            <Card.Title><i className="fa-regular fa-building"></i> House </Card.Title>
            <Card.Title><i className="fa-solid fa-cart-plus "></i> </Card.Title>
          </div>
          <Card.Text className="mt-3  ">
            {displayData?.houseSpecification}
           <br />
            <br />
            <div className='d-flex justify-content-between mt-3 '>
              <button onClick={() => handleShow(true)} type="button" className="btn btn-outline-secondary" ><i className="fa-brands fa-youtube"></i></button>
             <button onClick={()=>handleFavourite(true)} type="button" className="btn btn-outline-danger" ><i className="fa-regular fa-heart"></i></button>
              <button onClick={() => handleRemove(displayData?.id)} type="button" className="btn btn-outline-dark" ><i className="fa-regular fa-trash-alt"></i></button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {displayData?.houseName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Text>
            <h5>Spec: </h5> {displayData?.houseSpecification}</Card.Text>

          <iframe width="100%" height="400" src={`${displayData?.videoUrl}?autoplay=1`} title="caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default BuyCard