import { Container, Row, Col} from "react-bootstrap";
import React from 'react'
import logo from "../assets/img/wal.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="info">
        <ul>
          <li> <a href="tel:002237201121">Telephone : +223000000</a></li>
          <li> <a href="mailto:walanso.ml">Email : walanso.ml</a></li>
          <li><a href="mailto:walanso.ml">Place: Kabala, ...</a></li>
        </ul>
        </div>

        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#/"><img src={navIcon1} alt="Icon" /></a>
              <a href="#/"><img src={navIcon2} alt="Icon" /></a>
              <a href="#/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
