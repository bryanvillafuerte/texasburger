import { Container, Image, Button } from "react-bootstrap";
import menuburger from '../assets/images/iStock-1188412964.jpg'

export default function MenuSection() {
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
              <Button variant='primary'>SE MENY</Button>
            </div>
          </div>
        </div>
        <div className='menusection-grid'>
          <div className='menusection-content2'>
            <div className='content'>
              <h4>Last ned</h4>
              <h3><span className='text-primary'>V</span>ÅR MENY</h3>
              <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non hendrerit risus, nec dignissim nisl. Cras blandit augue vel sapien molestie tincidunt.</p>
              <Button variant='primary'>SE MENY</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}