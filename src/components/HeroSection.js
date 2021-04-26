import { Image } from "react-bootstrap";
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
              <p className='lead text-center lead1'>vi tilbyr den beste burgeropplevelsen, ved å servere deg alt fra kylling, biff, fisk og veggie burgere.</p>
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