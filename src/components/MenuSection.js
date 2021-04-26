import { useState } from 'react'
import { Container, Image, Button, Modal } from "react-bootstrap";
import menuburger from '../assets/images/iStock-1188412964.jpg'
import menuburger2 from '../assets/images/iStock-1210410416.jpg'
import meny from '../assets/images/BurgerMenuUtenpris.jpg'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Se menyen vår
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='meny-image-container'>
          <Image src={meny} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function MenuSection() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='menusection-outer-container' id='vaar-meny'>
      <Container className='menusection-inner-container'>
        <div className='menusection-grid'>
          <div className='image-container'>
            <Image src={menuburger} />
          </div>
        </div>
        <div className='menusection-grid'>
          <div className='menusection-content1'>
            <div className='content'>
              <h4>Last ned</h4>
              <h3><span className='text-primary'>V</span>ÅR MENY</h3>
              <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non hendrerit risus, nec dignissim nisl. Cras blandit augue vel sapien molestie tincidunt.</p>
              <Button variant='primary' onClick={() => setModalShow(true)}>SE MENY</Button>
            </div>
          </div>
        </div>
        <div className='menusection-grid'>
          <div className='image-container'>
            <Image src={menuburger2} />
          </div>
        </div>
      </Container>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}