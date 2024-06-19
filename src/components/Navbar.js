import React from 'react';
import { Navbar, Container, Form, FormControl, Button, Nav, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap';

/**
 * NavbarComponent
 * This component renders the navigation bar for the application.
 * It includes a brand, a collapsible menu, and a search form.
 * 
 * @param {string} query - The current search query.
 * @param {function} changeHandler - Function to handle changes in the search input.
 * @param {function} searchMovie - Function to execute the search based on the query.
 * @returns {JSX.Element} The rendered component.
 */
const NavbarComponent = ({ query, changeHandler, searchMovie }) => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container fluid>
        {/* Brand name and link to home */}
        <NavbarBrand href='/home'>Movie Search App</NavbarBrand>
        
        {/* Toggle button for collapsing navbar on small screens */}
        <NavbarToggle aria-controls='navbarScroll' />

        {/* Collapsible navbar content */}
        <NavbarCollapse id='navbarScroll'>
          {/* Empty nav section for layout adjustment */}
          <Nav className='me-auto my-2 my-lg-3' style={{ maxHeight: '100px' }} navbarScroll></Nav>
          
          {/* Search form */}
          <Form className='d-flex' autoComplete='off'>
            <FormControl
              type='search'
              placeholder='Movie Search'
              className='me-2'
              aria-label='search'
              name='query'
              value={query}
              onChange={changeHandler}
            />
            <Button variant='secondary' type='button' onClick={() => searchMovie(query)}>Search</Button>
          </Form>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;