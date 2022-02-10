import React, { Component } from "react";
import { Card, CardTitle, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

class AptIndex extends Component {
  render() {
    console.log(this.props.apartments, "apartments");
    return (
      <>
        <h1>AptIndex</h1>
        <Col sm="6">
          {this.props.apartments.map((apartment) => {
            return (
              <Card body key={apartment.id}>
                <CardTitle>
                  <NavLink to={`/aptshow/${apartment.id}`}>
                    {apartment.street}
                  </NavLink>
                </CardTitle>
              </Card>
            );
          })}
        </Col>
      </>
    );
  }
}

export default AptIndex;

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
