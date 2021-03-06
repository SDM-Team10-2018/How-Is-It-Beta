//client/components/App.js
import React from "react";
import axios from "axios";
import { Grid, Button, Row, Col, Image, Jumbotron, Navbar } from "react-bootstrap";
var querystring = require("querystring");
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      description: "",
      amount: "",
      month: "",
      year: "",
      messageFromServer: ""
    };
    this.onClick = this.onClick.bind(this);
    //this.handleTextChange = this.handleTextChange.bind(this);
    //this.insertNewExpense = this.insertNewExpense.bind(this);
  }

  

  onClick(emo) {
    this.setState({
      description: emo
    });
    this.insertNewExpense(emo, this);
    console.log(emo);
  }
  insertNewExpense(emot, e) {
    var result = "added";
    axios
      .post(
        "/insert",
        querystring.stringify({
          desc: emot,
          amount: 1018
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(function(response) {
        e.setState({
          messageFromServer: response.data
        });
        result = response.data;
        // this.setState.messageFromServer= response.data
      });
    console.log(result);
  }

  render() {
    if (this.state.messageFromServer == "") {
      return ([
        
        <div className="App">
        <div>
        <header className="App-header">
        {/* <img src="images/cutmypic1.jpg" className="jump" alt="logo" /> */}
        {/* <img src="images/emoticon.jpg" className="jump" alt="logo" className="profile-pic"/> */}
       {/*  <img src="images/cutmypic.jpg" className="jump" alt="logo" /> */}
          <h1 className="App-title">HOW.IS.IT :)</h1>
          <h2 className="App-team">Team 10</h2>
        </header>
        </div>,
        <div>
          
          <Grid>
            
            <Jumbotron >
              <p>Hey, How are you feeling?</p>
              <Row className="show-grid text-center">
              <Col xs={12} sm={2} className="peerson-wrapper">
                <Image
                  id="description"
                  src="images/VeryHappy.jpg"
                  circle className="profile-pic" width="50px" height="50px"
                  onClick={() => {
                    this.onClick("Very Happy");
                  }}
                />
                <h5>Very Happy</h5>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
                <Image
                  src="images/Scared.jpg"
                  circle
                  className="profile-pic" width="50px" height="50px"
                  onClick={() => {
                    this.onClick("Scared");
                  }}
                />
                <h5>Scared</h5>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
                <Image
                  src="images/Angry.jpg"
                  circle
                  className="profile-pic" width="50px" height="50px"
                  onClick={() => {
                    this.onClick("Angry");
                  }}
                />
                <h5>Angry</h5>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
                <Image
                  src="images/VeryBad.jpg"
                  circle
                  className="profile-pic" width="50px" height="50px"
                  onClick={() => {
                    this.onClick("VeryBad");
                  }}
                />
                <h5>Very Bad</h5>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
                <Image
                  src="images/Sad.jpg"
                  circle
                  className="profile-pic" width="50px" height="50px"
                  onClick={() => {
                    this.onClick("Sad");
                  }}
                />
                <h5>Sad</h5>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
                <Image
                  src="images/Crying.jpg"
                  circle
                  className="profile-pic" width="50px" height="50px"
                  onClick={() => {
                    this.onClick("Crying");
                  }}
                />
                <h5>Crying</h5>
              </Col>
            </Row>
            </Jumbotron>
           
          </Grid>

          {/* <div className="button-center">
            <br />
            <Button bsStyle="success" bsSize="small" onClick={() => {
                    this.onClick("Submit");
                  }} >
              Save Your Emotions
            </Button>
          </div> */}
        </div>
        </div>
      ]);
    } else {
      return (
        <div>
          <div className="button-center">
            <h3>{this.state.messageFromServer}</h3>
          </div>
        </div>
      );
    }
  }
}
