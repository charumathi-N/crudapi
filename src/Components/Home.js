import React, { useEffect } from "react";
import { Mock_API } from "../Components/Url.js";
import FormExample from "../Components/Createuser.js";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import { useState } from "react";
import "../Components/Home.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";



function Home() {
  const [records, setRecords] = useState([]);
  const [visibility, setVisibility] = useState(true);
  const [viewdata, setviewData] = useState([]);
  const [userId,setuserId] = useState("");
  const [formvisibility, setformVisibility] = useState(false);


  const navigates = new useNavigate();
  const urlInputRef = useRef(null);

  const Handlerroute = () => {
    setVisibility(!visibility);
  };
  //for fetch the data
  useEffect(() => {
    fetch(Mock_API)
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  //for delete the data
  const deleteData = (id) => {
    fetch(Mock_API + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecords((prevRecords) =>
          prevRecords.filter((item) => item.id !== id)
        );
      })
      .catch((err) => console.log(err));
  };

  //for Update the data
  const updateData = (id) => {
    navigates("/Createuser",{ state: { userId: id } });
    //shares the id between the components
    setuserId(id);
    console.log(id);
    setTimeout(() => {
    const selectedItem = records.find((item) => item.id == id);

    //getting all the dom value
    const urlInput = document.getElementsByClassName("url")[0];
    const userName = document.getElementsByClassName("username")[0];
    const Email = document.getElementsByClassName("email")[0];
    const Address = document.getElementsByClassName("address")[0];
    const PhoneNumber = document.getElementsByClassName("Phonenumber")[0];
    const About = document.getElementsByClassName("about")[0];

    if (selectedItem) {
        urlInput.value = selectedItem.image;
        userName.value = selectedItem.name;
        Email.value = selectedItem.email;
        Address.value = selectedItem.address;
        PhoneNumber.value = selectedItem.phone;
        About.value = selectedItem.description
    }
}, 0);
  };

  //for View the data
  const viewData = (id) => {
    fetch(Mock_API + "/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, id);
        setviewData(data);
        setVisibility(!visibility);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {visibility ? (
        <div className="container">
          {records.map((item, index) => (
            <Card style={{ width: "18rem" }} key={index} className="card">
              <img
                alt="img"
                src={item.image}
                onError={(event) => {
                  event.target.src =
                    "https://cdn.pixelbin.io/v2/dummy-cloudname/FIDrmb/original/images/transformation/lady.jpeg";
                  event.onerror = null;
                }}
              />
              <CardBody className="cardbody">
                <CardTitle tag="h3" className="cardtitle">
                  {item.username}
                </CardTitle>
                <CardSubtitle className="cardsubtitle">
                  <CardText className="cardtext">
                    <div className="details">UserId: {item.id}</div>
                    <div className="details">E-mail: {item.email}</div>
                    <div className="details">DOB: {item.dateofbirth}</div>
                    <div className="details"> Address: {item.address}</div>
                    <div className="details">PhoneNumber: {item.phone}</div>
                  </CardText>
                  <Button
                    className="btn"
                    active
                    color="primary"
                    onClick={() => updateData(item.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="btn"
                    active
                    color="primary"
                    onClick={() => deleteData(item.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="btn"
                    active
                    color="primary"
                    onClick={() => viewData(item.id)}
                  >
                    View
                  </Button>
                </CardSubtitle>
              </CardBody>
            </Card>
          ))}
        </div>
      ) : (
        <div className="container">
          <Card>
            <CardTitle tag="h3" className="cardtitle">
              {viewdata.username}
            </CardTitle>
            <CardSubtitle className="cardsubtitle">
              <CardText className="cardtext">
                <img src={viewdata.image} alt="image not available" />
                <div className="viewData">UserId:{viewdata.id}</div>
                <div className="viewData">E-mail:{viewdata.email}</div>
                <div className="viewData">DOB:{viewdata.dateofbirth}</div>
                <div className="viewData">Address:{viewdata.address}</div>
                <div className="viewData">PhoneNumber:{viewdata.phone}</div>
              </CardText>
              <Button color="primary" onClick={Handlerroute}>
                Home
              </Button>
            </CardSubtitle>
          </Card>
        </div>
      )}
    </>
  );
}

export default Home;
