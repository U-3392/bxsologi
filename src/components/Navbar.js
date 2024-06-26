import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/documentation" activeStyle>
                        Documentation
                    </NavLink>
                    <NavLink to="/search" activeStyle>
                        Competitor Search
                    </NavLink>
                    <NavLink to="/roster" activeStyle>
                        Competition Roster Creator
                    </NavLink>
                    <NavLink to="/simulation" activeStyle>
                        Competition Simulation
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;