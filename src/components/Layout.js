import { Navbar, Nav, Image, Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/logo/texas-burger-logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import StorefrontIcon from '@material-ui/icons/Storefront';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Layout(props) {
  return (
    <div>
      <Navbar variant="dark" sticky='top' expand="md">
        <Container>
          <Nav className="ml-auto nav-left nav-desktop">
            <AnchorLink className='nav-link' href="#burger-section">VÅR MAT</AnchorLink>
            <AnchorLink className='nav-link' href="#vaar-meny">VÅR MENY</AnchorLink>
          </Nav>

          <Navbar.Brand href="/">
            <Image src={logo} alt="Saftig dobbel cheeseburger med pommes frites" />
          </Navbar.Brand>

          <Nav className="mr-auto nav-right nav-desktop">
            <AnchorLink className='nav-link' href="#abonner">ABONNER</AnchorLink>
            <AnchorLink className='nav-link' href="#kontakt">KONTAKT OSS</AnchorLink>
          </Nav>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className='nav-mobile'>
            <Nav className="ml-auto">
              <AnchorLink href="#burger-section" className="nav-link ml-auto">VÅR MAT</AnchorLink>
              <AnchorLink href="#vaar-meny" className="nav-link ml-auto">VÅR MENY</AnchorLink>
              <AnchorLink href="#abonner" className="nav-link ml-auto">ABONNER</AnchorLink>
              <AnchorLink href="#kontakt" className="nav-link ml-auto"  >KONTAKT OSS</AnchorLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {props.children}

      <footer className='footer-outer-container' id='kontakt'>
        <div className='footer-inner-container'>
          <Container>
            <Row>
              <Col md={6}>
                <Image src={logo} />
              </Col>
              <Col md={6}>
                <p className='lead'>
                  <StorefrontIcon className='text-primary' />
                  &nbsp;&nbsp;Per Gyntveien 30, 1709 Sarpsborg
                </p>
                <p className='lead'>
                  <MailOutlineIcon className='text-primary' />
                  &nbsp;&nbsp;hello@texas-burger.no
                </p>
                <p className='lead'>
                  <PhoneIcon className='text-primary' />
                  &nbsp;&nbsp;+47 966 20 222
                </p>
                <p className='lead'>
                  <FacebookIcon className='text-primary' />
                  &nbsp;&nbsp;Facebook
                  &nbsp;&nbsp;<InstagramIcon className='text-primary' />
                  &nbsp;&nbsp;Instagram
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='copyright'>
          <p className='text-light text-center'>Copyright © 2021 Texas Burger AS</p>
        </div>
      </footer>
    </div>
  )
}