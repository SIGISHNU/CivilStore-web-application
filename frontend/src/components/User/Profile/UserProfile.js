import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useSelector } from "react-redux";
import defaultProfile from "../../User/Images/default-profile.png";
import "./UserProfile.css";


function UserProfile() {
  //taking state from useSlice
  let userDetails = useSelector((state) => state.userDetails.user);
  
  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //cropping image
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    handleShow(true);
  };

  //crop image button state
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [result, setResult] = useState(null);
  const [backendError,setBackendError]=useState('');
  const [blob,setBlob]= useState(null)

 
  const userId = userDetails._id

  function getCroppedImg() {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    // New lines to be added
    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

  
      canvas.toBlob(
        (blob) => {
          blob.name = userId;
          console.log('blob',blob);
          setBlob(blob);
        },
        "image/jpeg",
        1
      );
   
    const base61Image = canvas.toDataURL("image/jpeg");
    setResult(base61Image);
    setShow(false);
  }

  const submitHandler = async(e) => {
    e.preventDefault();


    try {

      const config = {
        headers:{
          "Content-type":"multipart/form-data",
        },
      };
  
      const formData = new FormData();
       formData.append('profilepic',blob);
       console.log('result',result);
       const {data} = await axios.post('/users/profilepic',formData,config)
      console.log("profile pic",data);
    } catch (backendError) {
      
      setBackendError(backendError.response.data.message)
      console.log('error : ',backendError.response.data.message);
    }
    

  }



  return (
    <Container className="mt-5">
      <h1>
        <strong
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          Profile
        </strong>
      </h1>

      <Row className="profileContainer">
        <Col className="profilPic" sm={4}>
          <img
            src={result ? result : defaultProfile}
            alt="profile pic"
            className="image-fluid"
            style={{ width: "100%", height: "auto" }}
          ></img>
        </Col>
        <Col md={6}>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={userDetails.name}
                readOnly
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={userDetails.email}
                readOnly
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="mobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                value={userDetails.mobile}
                readOnly
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Place</Form.Label>
              <Form.Control
                type="text"
                value={userDetails.place}
                readOnly
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Landmark</Form.Label>
              <Form.Control
                type="text"
                value={userDetails.landmark}
                readOnly
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="text"
                value={userDetails.pincode}
                readOnly
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Multiple files input example</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} multiple />
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {file && (
                <ReactCrop
                  src={file}
                  onImageLoaded={setImage}
                  crop={crop}
                  onChange={setCrop}
                />
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={getCroppedImg}>
                Crop
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
