import { Navbar, Nav, Image, Container } from 'react-bootstrap'
import logo from '../../assets/logo/texas-burger-logo.svg'

export default function Layout(props) {
  return (
    <div>
      <Navbar variant="dark" sticky='top' expand="md">
        <Container>
          <Nav className="ml-auto nav-left nav-desktop">
            <Nav.Link href="#home">VÅR MAT</Nav.Link>
            <Nav.Link href="#features">VÅR MENY</Nav.Link>
          </Nav>

          <Navbar.Brand href="/">
            <Image src={logo} />
          </Navbar.Brand>

          <Nav className="mr-auto nav-right nav-desktop">
            <Nav.Link href="#home">ABONNER</Nav.Link>
            <Nav.Link href="#features">KONTAKT OSS</Nav.Link>
          </Nav>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className='nav-mobile'>
            <Nav className="ml-auto">
              <Nav.Link href="#home" className="ml-auto">VÅR MAT</Nav.Link>
              <Nav.Link href="#features" className="ml-auto">VÅR MENY</Nav.Link>
              <Nav.Link href="#home" className="ml-auto">ABONNER</Nav.Link>
              <Nav.Link href="#features" className="ml-auto"  >KONTAKT OSS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {props.children}

      <footer>
        
      </footer>
    </div>
  )
}