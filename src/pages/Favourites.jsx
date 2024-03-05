import React, { useEffect, useState } from 'react';
import { getFavouriteApi, removeFavouriteApi } from '../services/allApis';
import { Card, Modal, Col, Row } from 'react-bootstrap';

function Favourite() {
  const [favouritePlots, setFavouritePlots] = useState([]);
  const [lgShow, setLgShow] = useState(false);

  const getFavourite = async () => {
    const house = await getFavouriteApi();
    setFavouritePlots(house.data);
  };

  useEffect(() => {
    getFavourite();
  }, []);

  const handleFavouriteRemove = async (id) => {
    await removeFavouriteApi(id);
    getFavourite();
  };

  return (
    <>
      <div>

        <div className='d-flex justify-content-between'>

          <div className='m-5'>
            <h2 className='fs-1 ' >Here is your <span className='text-warning'>Interested Property</span> lists.</h2>
            <p style={{color:'#5B84B1FF'}} className='mt-3 text'>Choose your dream property with us..</p>

          </div>


          <img className='' style={{ width: "300px", height: '220px' }} src='https://cdn.dribbble.com/users/127211/screenshots/1635050/house-animation-lag.gif' alt='img' />


        </div>



        <Row style={{ width: '100%' }}>
          {favouritePlots?.length > 0 ? (
            favouritePlots.map((house, index) => (
              <Col key={index} className='mb-4 ' sm={12} md={6} lg={4}>
                <Card className='ms-5' style={{ width: '18rem' }}>
                  <Card.Img style={{ width: '100%', height: '36vh' }} variant="top" src={house?.imageUrl} />
                  <Card.Body style={{ height: "190px" }}>
                    <div className="d-flex justify-content-between">
                      <Card.Title><i className="fa-regular fa-building"></i> House </Card.Title>
                      <Card.Title><i className="fa-solid fa-cart-plus "></i> </Card.Title>
                    </div>
                    <Card.Text className="mt-3">
                      {house?.houseSpecification}
                      <br />
                      <br />
                      <div className='d-flex justify-content-between mt-3'>
                        <button onClick={() => setLgShow(true)} type="button" className="btn btn-outline-secondary" ><i className="fa-brands fa-youtube"></i></button>
                        <button onClick={() => handleFavouriteRemove(house.id)} type="button" className="btn btn-outline-danger" ><i className="fa-regular fa-heart"></i></button>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Modal
                  key={index}
                  size="lg"
                  show={lgShow}
                  onHide={() => setLgShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      {house?.houseName}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Card.Text>
                      <h5>Spec: </h5> {house?.houseSpecification}
                    </Card.Text>
                    <iframe width="100%" height="400" src={`${house?.videoUrl}?autoplay=1`} title="caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </Modal.Body>
                </Modal>
              </Col>
            ))
          ) : (
            <div className='text-Warning fw-bolder fs-1'>No videos are added to Favourites yet!!</div>
          )}
        </Row>
      </div>
    </>
  );
}

export default Favourite;
