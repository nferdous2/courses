import {  Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Style/Style.css"
const Header = () => {

  return (
    <Navbar className='pt-3 pb-3' style={{ background: 'rgba(3, 33, 44, 0.945)'}} expand="lg">
      <Container >
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <h2 className="navbar-brand custom_nav p-3">KnowledgeNook</h2>
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className=" mx-auto d-flex flex-row-reverse align-items-center w-100">
          <Link className='custom_nav p-3' to="/dashboard"><h5 className='text-center'>Dashboard</h5>
             </Link>
             <Link className='custom_nav p-3' to="/"><h5 className='text-center'>Contact Us</h5></Link>

            <Link className='custom_nav p-3' to="/"><h5 className='text-center'>About Us</h5></Link>
            <Link className='custom_nav p-3' to="/"><h5 className='text-center'>Courses</h5></Link>
            <Link className='custom_nav p-3' to="/"><h5 className='text-center'>Home</h5></Link>


           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header

