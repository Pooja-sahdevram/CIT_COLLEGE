import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "../MenuItems";
import { Link } from "react-router-dom";
import logo from "./../../assets/Logo1.png";
import Home from "../../routes/Home";
class Navbar extends Component {
  // Set state
  state = { clicked: false };
  // Make Handleclick Function
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems">
        <a className="navbar-Logo">
          <img src={logo} />
        </a>
        <div className="menu-icone" onClick={this.handleclick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}> </i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
