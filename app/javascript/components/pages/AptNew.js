import React, { Component } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

class AptNew extends Component {
  // Added code for create, will implement once user form is implemented
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     newApartment: {
  //       street: "",
  //       city: "",
  //       state: "",
  //       manager: "",
  //       email: "",
  //       price: "",
  //       bedrooms: "",
  //       bathrooms: "",
  //       pets: "",
  //     },
  //   };
  // }

  // handleChange = (e) => {
  //   let { newApartment } = this.state;
  //   newApartment[e.target.name] = e.target.value;
  //   this.setState({ newApartment: newApartment });
  // };

  render() {
    return (
      <>
        <h1>AptNew</h1>
      </>
    );
  }
}

export default AptNew;
