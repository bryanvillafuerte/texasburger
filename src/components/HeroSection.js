import { Button, Image } from "react-bootstrap";
import grilledburgers from '../assets/images/iStock-1247464704.jpg'

export default function HeroSection() {
  return (
    <div className='herosection-outer-container'>
      <div className='herosection-inner-container'>
        <div className='column-left' md={6}>
          <div className='column-left-content'>
            <div className='herosection-heading'>
              <h3 className='text-center'><span className='text-primary'>B</span>urgere så deilig at du kommer tilbake igjen og igjen.</h3>
            </div>
            <div className='herosection-text'>
              <p className='lead text-center lead1'>Vi tilbyr bare den beste burgeropplevelsen.</p>
              <p className='lead text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non hendrerit risus, nec dignissim nisl. Cras blandit augue vel sapien molestie tincidunt.</p>
              <div className='herosection-cta d-flex'>
                <Button variant='primary mx-auto'>SE VÅR MENY</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className='column-right' md={6}>
          <Image src={grilledburgers} />
        </div>
      </div>
    </div>
  )
}