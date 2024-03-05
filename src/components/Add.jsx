/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import { uploadPlotApi } from '../services/allApis';

function Add({setUploadResponse}) {
  const [uploadPlot, setUploadPlot] = useState({
    houseName: '',
    imageUrl: '',
    houseSpecification: '',
    price: '',
    videoUrl: ''
  });
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUploadPlot({
      houseName: '',
      imageUrl: '',
      houseSpecification: '',
      price: '',
      videoUrl: ''
    });
  };

  const handleShow = () => setShow(true);

  const getYoutubeEmbedLink = (link) => {
    if (link.includes("v=")) {
      const videoId = link.split("v=")[1].slice(0, 11);
      setUploadPlot({ ...uploadPlot, videoUrl: `https://www.youtube.com/embed/${videoId}` });
    } else {
      alert("Please enter a valid youtube link");
    }
  };

  const handleUpload = async () => {
    const { houseName, imageUrl, houseSpecification, price, videoUrl } = uploadPlot;
    if (houseName && imageUrl && houseSpecification && price && videoUrl) {
      try {
        const result = await uploadPlotApi(uploadPlot);
        console.log(result);
        alert('Your property has been uploaded successfully');
        setUploadResponse(result.data);
        handleClose();
      } catch (error) {
        console.error('Error uploading property:', error.message);
        alert('Failed to upload property. Please try again later.');
      }
    } else {
      alert('Please fill all fields.');
    }
    setShow(false);
  };

  return (
    <>
      <Button className='p-3 ms-5' variant="dark" onClick={handleShow}>
        Add new property <i className="fa-solid fa-upload ps-3"></i>
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following:</p>

          <FloatingLabel controlId="floatingInput" label="House Name." className="mb-3">
            <Form.Control value={uploadPlot.houseName} onChange={(e) => setUploadPlot({ ...uploadPlot, houseName: e.target.value })} type="text" placeholder="House Name" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Image url" className="mb-3">
            <Form.Control value={uploadPlot.imageUrl} onChange={(e) => setUploadPlot({ ...uploadPlot, imageUrl: e.target.value })} type="text" placeholder="Image url" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="House specification" className="mb-3">
            <Form.Control value={uploadPlot.houseSpecification} onChange={(e) => setUploadPlot({ ...uploadPlot, houseSpecification: e.target.value })} type="text" placeholder="Enter House Specification" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
            <Form.Control value={uploadPlot.price} onChange={(e) => setUploadPlot({ ...uploadPlot, price: e.target.value })} type="text" placeholder="Enter selling price" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Video url" className="mb-3">
            <Form.Control value={uploadPlot.videoUrl} onChange={(e) => getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Enter video Url" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>Close</Button>
          <Button variant="dark" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
