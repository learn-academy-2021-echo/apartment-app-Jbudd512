import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import mockApartments from "./assets/mockApartments";
import Home from "./pages/Home";
import AptIndex from "./pages/AptIndex";
import AptIndexProt from "./pages/AptIndexProt";
import AptShow from "./pages/AptShow";
import AptNew from "./pages/AptNew";
import AptEdit from "./pages/AptEdit";
import AptDelete from "./pages/AptDelete";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/aptindex"
              render={(props) => (
                <AptIndex apartments={this.state.apartments} />
              )}
            />
            <Route path="/aptindexprot" component={AptIndexProt} />
            <Route path="/aptshow" component={AptShow} />
            <Route path="/aptnew" component={AptNew} />
            <Route path="/aptedit" component={AptEdit} />
            <Route path="/aptdelete" component={AptDelete} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
