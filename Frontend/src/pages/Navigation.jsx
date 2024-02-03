import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './mynavbar.css';


function Navigation() {
  // const Toggle = ({ handleChange, isChecked })  => {
    return (
      
      
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            
            {/* <img className='image' src="src/images/feather.jpeg" alt="" /> <p className='hub'>  </p> */}
            
            
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="collapse">
            <Nav className="me-auto  ">
              <Nav.Link href='/' className='Home'>Home</Nav.Link>
              <Nav.Link href="/Blogs" className='Blogs'>Blogs</Nav.Link>
              <Nav.Link href="/Compose" className='Compose'>Compose</Nav.Link>

             
            
              <NavDropdown  title="Profile" className='profile'> 
              <NavDropdown.Item href='/Accountsettings' className='settings'>Account Settings</NavDropdown.Item>
                <NavDropdown.Item href='Signup' className='settings'> Sign Up</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>


        
    
        

        <div className="search-bar">
            {/* Your search bar component goes here */}
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>

        
          

          

        
            
            

      </Navbar>
      
    );
  }

export default Navigation;