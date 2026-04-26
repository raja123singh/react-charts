import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { NavLink } from 'react-router-dom'

function Navigator() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container fluid>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/barchart">
              Barchart
            </NavLink>

            <NavLink className="nav-link" to="/linechart">
              Linechart
            </NavLink>

            <NavLink className="nav-link" to="/piechart">
              Piechart
            </NavLink>

          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
            />

            {/* ✅ Normal button */}
            <button type="submit" className="custom-btn">
              Search
            </button>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigator