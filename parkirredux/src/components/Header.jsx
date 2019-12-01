import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

import {connect} from 'react-redux'

const Header = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
        <Navbar color="light" light expand="xs">
            <NavbarBrand href="/">APLIKASI PARKIR <p style={{color:'darkgrey', fontSize:'18px'}}>- Kartika Nirwana</p></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink href="/components/" style={{fontWeight:'bold'}}>Durasi: Rp.{props.bebas1} JAM</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/components/" style={{fontWeight:'bold'}}>Bayar: Rp.{props.bebas},00</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="https://github.com/kartikasilalahi">GitHub</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    );
};

const MapStatetoProps = state => {
    return {
        bebas: state.bebas,
        bebas1: state.bebas1

    };
}

// export default Header
export default connect(MapStatetoProps)(Header);
