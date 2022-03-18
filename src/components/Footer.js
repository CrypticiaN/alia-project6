import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
        <footer className="footer">
          <div className="content has-text-centered">
            <div className="container">
              <div style={{ maxWidth: "100vw" }} className="columns">
                <img
                    src={logo}
                    alt="ALIA"
                    style={{ width: "9em", height: "6em" }}
                />
                <div className="column">
                  <section className="menu">
                    <ul className="menu-list">
                      <li>
                        <Link to="/" className="navbar-item">
                          Vols dir hola?
                        </Link>
                      </li>
                      {/* <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>*/}
                    </ul>
                  </section>
                </div>
                <div className="column">
                  <section>
                    <ul className="menu-list">
                      <li>
                        <Link className="navbar-item" to="/blog">
                          Vols col·laborar?
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column">
                  <section>
                    <ul className="menu-list">
                      <li>
                        <Link className="navbar-item" to="/contact">
                          Som a Barcelona
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>
{/*                <div className="column social">
                  <a title="facebook" href="https://facebook.com">
                    <img
                        src={facebook}
                        alt="Facebook"
                        style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="twitter" href="https://twitter.com">
                    <img
                        className="fas fa-lg"
                        src={twitter}
                        alt="Twitter"
                        style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <img
                        src={instagram}
                        alt="Instagram"
                        style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="vimeo" href="https://vimeo.com">
                    <img
                        src={vimeo}
                        alt="Vimeo"
                        style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                </div>*/}
              </div>
            </div>
          </div>
        </footer>
    );
  }
};

export default Footer;
