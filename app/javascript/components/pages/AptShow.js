import React, { Component } from "react";
import { Card, CardTitle, CardText, Col } from "reactstrap";

class AptShow extends Component {
  render() {
    const { apartment } = this.props;
    return (
      <>
        <h1>AptShow</h1>
        <Col sm="6">
          <Card body>
            <CardTitle>{apartment.street}</CardTitle>
            {/* <img src={} alt="apartment image" /> */}
            <CardText>
              <ul>
                <li>City: {apartment.city}</li>
                <li>State: {apartment.state}</li>
                <li>Manager: {apartment.manager}</li>
                <li>Email: {apartment.email}</li>
                <li>Price: {apartment.price}</li>
                <li>Bedrooms: {apartment.bedrooms}</li>
                <li>Bathrooms: {apartment.bathrooms}</li>
                <li>Pets: {apartment.pets}</li>
              </ul>
            </CardText>
          </Card>
        </Col>
      </>
    );
  }
}

export default AptShow;

// street: "12345 Generic Street Name";
// city: "A place";
// state: "Somewhere";
// manager: "A Shady Company";
// email: "54321generic@gmail.com";
// price: "Tree Fiddy";
// bedrooms: 1;
// bathrooms: 1;
// pets: "Nothing exotic";
// user_id: 1;
