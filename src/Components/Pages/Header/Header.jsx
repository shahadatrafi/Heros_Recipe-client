import React, { useContext } from 'react';
import { Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import './Header.css'




const Header = () => {



  const { user, LogOut } = useContext(AuthContext);
  console.log(user)
  const handleLogOut = () => {
    LogOut()
      .then(() => {
        console.log('Log out successfully')
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const renderTooltip = () => {
    return (
      <Tooltip id="username-tooltip" style={{ color: 'red' }}>
        {user.displayName}
      </Tooltip>
    );
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link to='/' className='text-decoration-none'><Navbar.Brand className='fs-4 fw-bold '>Heros <span className='text-danger'>Recipe</span></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className='fs-5 fw-bold me-3 text-secondary text-decoration-none' to='/'>Home</Link>
            <Link className='fs-5 fw-bold me-3 text-secondary text-decoration-none' to='/blog'>Blog</Link>
          </Nav>
          <Nav>
            {user?.uid ? <li>
              <Link> <OverlayTrigger placement="bottom" overlay={renderTooltip()}>
              <Image className='me-2' style={{ height: '50px' }} src={user?.photoURL} roundedCircle />
                                    </OverlayTrigger><Button onClick={handleLogOut} className='fs-5 fw-bold ' variant="danger">Log Out</Button></Link></li> :
              <Link to="/login"><Button className='fs-5 fw-bold' variant="danger">Login</Button></Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;