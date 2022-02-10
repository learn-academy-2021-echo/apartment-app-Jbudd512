import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AptIndex from "./pages/AptIndex";
import AptIndexProt from "./pages/AptIndexProt";
import AptShow from "./pages/AptShow";
import AptNew from "./pages/AptNew";
import AptEdit from "./pages/AptEdit";
import AptDelete from "./pages/AptDelete";
import AccountCreation from "./pages/AccountCreation";
import NotFound from "./pages/NotFound";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <Router>
          <Nav>
            <NavItem>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/aptindex">AptIndexLink</NavLink>
                </li>
                <li>
                  <NavLink to="/accountcreation">Create a new account</NavLink>
                </li>
              </ul>
            </NavItem>
          </Nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aptindex" component={AptIndex} />
            <Route path="/aptindexprot" component={AptIndexProt} />
            <Route path="/aptshow" component={AptShow} />
            <Route path="/aptnew" component={AptNew} />
            <Route path="/aptedit" component={AptEdit} />
            <Route path="/aptdelete" component={AptDelete} />
            <Route path="/accountcreation" component={AccountCreation} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}
export default App;
