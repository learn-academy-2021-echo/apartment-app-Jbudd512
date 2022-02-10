import React, { Component } from "react";
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
      </>
    );
  }
}
export default Header;
