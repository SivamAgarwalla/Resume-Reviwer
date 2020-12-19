/*
    All the Nav.Link just link to their respective pages
    Search react-router-bootstrap -> LinkContainer
*/

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href='#home'>Resume Reviewer</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Analytics</Nav.Link>
          <Nav.Link href='#pricing'>Profile</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
