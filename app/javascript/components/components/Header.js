import React, { Component } from "react";
import Home from "../pages/Home";
import AptIndex from "../pages/AptIndex";
import AptIndexProt from "../pages/AptIndexProt";
import AptShow from "../pages/AptShow";
import AptNew from "../pages/AptNew";
import AptEdit from "../pages/AptEdit";
import AptDelete from "../pages/AptDelete";
import NotFound from "../pages/NotFound";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

class Header extends Component {
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
        <h1>Header</h1>
        <Router>
          <Nav>
            <NavItem>
              <ul>
                <li>
                  <NavLink href="/">Home</NavLink>
                </li>
                <li>
                  <NavLink href="/aptindex">See all apartments</NavLink>
                </li>
                <li>
                  <NavLink href={sign_in_route}>Sign in</NavLink>
                </li>
                <li>
                  <NavLink href={sign_out_route}>Sign out</NavLink>
                </li>
              </ul>
            </NavItem>
          </Nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/aptindex"
              render={(props) => (
                <AptIndex apartments={this.props.apartments} />
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
export default Header;
