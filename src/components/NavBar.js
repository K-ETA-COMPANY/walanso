import { useState, useEffect } from "react";
import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/wal.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('Accueil');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#Accueil" className={activeLink === 'Accueil' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Accueil')}>Accueil</Nav.Link>
              <Nav.Link href="#Services" className={activeLink === 'Services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Services')}>Services</Nav.Link>
              <Nav.Link href="#APropos" className={activeLink === 'APropos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('APropos')}>A-Propos</Nav.Link>
              <Nav.Link href="#connect" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#/"><img src={navIcon1} alt="" /></a>
                <a href="facebook.com/walanso"><img src={navIcon2} alt="" /></a>
                <a href="instagram.com/walanso"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='www.walanso.ml'>
                <button className="vvd"><span>Connexion</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
