import React,{Component} from "react";
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
  DropdownItem,
  NavbarText
} from 'reactstrap';
import "../css/navbar.css";
import { Link } from "react-scroll";

class Navba extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
  return (
    <div className=''>
  <Navbar light className=" col-sm-12 mx-auto" expand="md" >
  <NavbarBrand className="mr-auto" href="/"><Link className="navbar-brand" href="/" activeClass="active"
  to="AboutMe"
  spy={true}
  smooth={true}
  offset={-200}
  duration={500}>
    Divit Karmiani
  </Link>
  </NavbarBrand>
  <NavbarToggler onClick={this.toggleNav} />

  <Collapse isOpen={this.state.isNavOpen} navbar>
      <Nav className="mx-auto nav">

      <NavItem className=''>
      <Link
      className="nav-item nav-link"
        activeClass="active"
        to="AboutMe"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >About Me</Link>
      </NavItem>

      <NavItem>
      <Link
      className="nav-item nav-link"
        activeClass="active"
        to="Experience"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Experience</Link>
      </NavItem>

      <NavItem>
      <Link
      className="nav-item nav-link"
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
      >Skills</Link>
      </NavItem>

      <NavItem>
      <Link
      className="nav-item nav-link"
        activeClass="active"
        to="Projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Projects</Link>
      </NavItem>

      <NavItem>
      <Link
      className="nav-item nav-link"
        activeClass="active"
        to="Interests"
        spy={true}
        smooth={true}
        offset={-65}
        duration={500}
      >Interests</Link>
      </NavItem>
      <NavItem>
      <Link
      className="nav-item nav-link"
        activeClass="active"
        to="ContactInfo"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >ContactInfo</Link>
      </NavItem>

      </Nav>
  </Collapse>
  </Navbar>
</div>
  );
}
}

export default Navba;
