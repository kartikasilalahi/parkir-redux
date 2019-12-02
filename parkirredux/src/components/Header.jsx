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
            <NavbarBrand href="/">APLIKASI SEDERHANA <p style={{color:'darkgrey', fontSize:'18px'}}>- Kartika Nirwana</p></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto pr-3" navbar>
                

                { props.bebas1 > 0 ? (
                    <NavItem><NavLink > {props.bebas1} Jam <br/>
                    Bayar: <p style={{fontWeight:'bolder', fontSize:'23px'}}>Rp.{props.bebas},00</p>
                    </NavLink></NavItem>
                    ) : null
                }

                { props.bebas2 > 1 ? (
                    <NavItem><NavLink > {props.bebas2} Words
                    </NavLink></NavItem> ) : props.bebas2 > 0 ? (
                    <NavItem><NavLink > {props.bebas2} Word
                    </NavLink></NavItem> ) : null
                }


                <NavItem>
                    <NavLink href="/Hitungkata">
                        Hitung Kata
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Homepage">
                        Parkir
                    </NavLink>
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
        bebas1: state.bebas1,
        bebas2: state.bebas2


    };
}

// export default Header
export default connect(MapStatetoProps)(Header);
