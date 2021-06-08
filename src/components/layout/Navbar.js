import React from "react";
import logo from "../../logoo.jpeg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <Link className="navbar-brand ml-5" href="#">
        <img className="logo" src={logo} alt="logoo..."/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-bars" style={{color: "#fff"}}></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <Link className="nav-link active ml-5" aria-current="page" to="/">Home&nbsp;<i class="fas fa-home" style={{color: "#fff"}}></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ml-4" to="/news">news</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ml-4" to="/contacts">contact us</Link>
        </li>
       
      </ul>
      <form className="d-flex ml-auto">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit">
            Search
            </button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Navbar
