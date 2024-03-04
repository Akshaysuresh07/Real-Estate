import React, { useEffect, useState } from 'react';
import BuyCard from './BuyCard';
import { getALLPlotApi } from '../services/allApis';
import { Row, Col } from 'react-bootstrap';

function Disview({uploadResponse}) {
  const [AllPlot, setAllPlot] = useState([]);
  const [deletePlotResponse, setDeletePlotResponse] = useState('');

  const getAllPlot = async () => {
    const result = await getALLPlotApi();
    if (result?.status === 200) {
      setAllPlot(result.data);
    }
  };

  useEffect(() => {
    getAllPlot();
  }, [uploadResponse, deletePlotResponse]);
  

  return (
    <>
      <Row className='rounded m-2'>
        {AllPlot.length > 0 ? (
          AllPlot.map((house, index) => (
            <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
              <BuyCard displayData={house} setDeleteVideoResponse={setDeletePlotResponse} />
            </Col>
          ))
        ) : (
          <div className='text-danger fw-bolder'>No videos are uploaded yet!!</div>
        )}
      </Row>
    </>
  );
}

export default Disview
