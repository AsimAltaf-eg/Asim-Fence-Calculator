import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Container, Button } from 'react-bootstrap'

function Header() {
  return (
      <Navbar variant="dark" bg="dark">
        <Container>
            <Link to={`/`}>
                Fence Calculator
            </Link>
        </Container>
      </Navbar>
  )
}

export default Header