import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import mockApartments from "./assets/mockApartments";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: mockApartments,
    };
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <>
        <Header apartments={this.state.apartments} {...this.props} />
        <Footer />
      </>
    );
  }
}
export default App;
