import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { Form,Row,Col,FormGroup,Label,Input,Button } from 'reactstrap';
import { useEffect } from 'react';
import {Mock_API} from "./Url.js";
import { useLocation } from "react-router-dom";

const FormExample=({userid})=>{
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [about, setAbout] = useState("");  
  
 
    // Use useLocation hook to get the current location
    const location = useLocation();

    // Access userId from location.state or use the prop (fallback)
    const userId = location.state?.userId || userid;
  
  
  const postData = ()=>{
      let data = {
        image: image,
        username:name,
        email:email,
        address:address,
        phone:pnumber,
        description:about
      };
      fetch(Mock_API,{
       method: "POST",
       body: JSON.stringify(data),
       headers:{
        "Content-Type":"application/json"
       }
      }).then((res)=>res.json())
      .then((data)=>console.log(data))
      .catch((err)=>console.log(err))
      }
const UpdateData = (id)=>{
    let data = {
      image: image,
      username: name,
      email: email,
      address: address,
      phone: pnumber,
      description: about,
    };
    fetch(Mock_API+"/"+id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }


 return(
    <Form>
  <Row>
    {/* image url */}
    <Col md={12}>
      <FormGroup>
        <Label for="exampleEmail">
          Image URL:
        </Label>
        <Input
          id="url"
          name="URL"
          className="url"
          placeholder="Enter the image URL"
          type="text"
          onChange={event => setImage(event.target.value) }
        />
      </FormGroup>
    </Col>
    {/* username */}
    <Col md={12}>
      <FormGroup>
        <Label for="UserName">
          UserName:
        </Label>
        <Input
          id="username"
          className="username"
          name="Name"
          placeholder="Username"
          type="Text"
          onChange={event => setName(event.target.value) }
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
          {/* email */}
    <Label for="exampleAddress">
      Email:
    </Label>
    <Input
      id="exampleAddress"
      className="email"
      name="address"
      placeholder="Email"
      type="Email"
      onChange={event => setEmail(event.target.value) }
    />
  </FormGroup>
  <FormGroup>
    {/* Address */}
    <Label for="exampleAddress2">
      Address:
    </Label>
    <Input
      id="exampleAddress2"
      className="address"
      name="address2"
      placeholder="Apartment, studio, or floor"
      type="text"
      onChange={event => setAddress(event.target.value) }
    />
  </FormGroup>
  <Row>
    {/* Phone number */}
    <Col md={12}>
      <FormGroup>
        <Label for="exampleCity">
          Phone Number:
        </Label>
        <Input
          id="Phonenumber"
          className="Phonenumber"
          name="city"
          type="string"
          onChange={event => setPnumber(event.target.value) }
        />
      </FormGroup>
    </Col>
    <Col md={12}>
      <FormGroup>
        {/* About */}
        <Label for="exampleState">
          About:
        </Label>
        <Input
          id="exampleState"
          className="about"
          name="state"
          type="textarea"
          onChange={event => setAbout(event.target.value) }
        />
      </FormGroup>
    </Col>
  </Row>
  {/* Submit */}
  <Button color="primary my-2" onClick={postData}>
    Submit
  </Button>
  {/* update */}
  <Button color="primary my-2" onClick={UpdateData(userId)}>
    Update
  </Button>
   </Form>
  );
}

export default FormExample;