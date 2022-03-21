import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";



const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "9em" }} />
            </Link>
          </div>
          {/* Hamburger menu */}
          <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                Nosaltres
              </Link>
              <Link className="navbar-item" to="#">
                <DropdownButton className="my-dropdown" title="Serveis">
                  {/*id="dropdown-basic-button"*/}
                  <Dropdown.Item className="my-dropdown-link"> <Link to="/serveis/formacio">Formació</Link></Dropdown.Item>
                  <Dropdown.Item className="my-dropdown-link"> <Link to="/serveis/consultoria-de-genere">Consultoria de gènere</Link></Dropdown.Item>
                  <Dropdown.Item className="my-dropdown-link"> <Link to="/serveis/creacio-artistica-comunitaria-i-arterapia">Creació artística comunitària i art-teràpia</Link></Dropdown.Item>
                  <Dropdown.Item className="my-dropdown-link"> <Link to="/serveis/dinamitzacio-comunitaria-en-lambit-intercultural">Dinamització comunitària en l'àmbit intercultural</Link></Dropdown.Item>
                  <Dropdown.Item className="my-dropdown-link"> <Link to="/serveis/disseny-i-comunicacio-feminista">Disseny i comunicació feminista</Link></Dropdown.Item>
                  <Dropdown.Item className="my-dropdown-link"> <Link to="/serveis/investigacio">Investigació</Link> </Dropdown.Item>
                </DropdownButton>
              </Link>
              <Link className="navbar-item" to="/projectes">
                Projectes
              </Link>
              <Link className="navbar-item" to="/contact">
                Contacte
              </Link>
{/*              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>*/}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
