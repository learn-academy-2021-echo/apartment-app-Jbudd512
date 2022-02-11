import React, { Component } from "react";
import { Card, CardTitle, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

class AptIndexProt extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    const { apartments } = this.props;
    console.log(logged_in, "logged in");
    return (
      <>
        <h1>AptIndexProt</h1>
        {logged_in === true && (
          <Col sm="6">
            {apartments.map((apartment) => {
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
        )}
      </>
    );
  }
}

export default AptIndexProt;
