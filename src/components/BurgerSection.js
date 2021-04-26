import { Container, Image } from "react-bootstrap";
import chickenBurger from '../assets/images/iStock-511520568.png'
import beefBurger from '../assets/images/iStock-1206323282.png'
import veggyBurger from '../assets/images/iStock-1024065168.png'

export default function BurgerSection() {
  return (
    <div className='burgersection-outer-container' id='burger-section'>
      <Container className='burgersection-inner-container'>
        <div className='burgersection-heading-container'>
          <div className='line-left'>
            <hr />
          </div>
          <h2 className='text-light text-center'><span className='text-primary'>V</span>ÅR MAT</h2>
          <div className='line-right'>
            <hr />
          </div>
        </div>

        <div className='burgersection-content-container'>

          <div className='burgersection-item-container'>
            <div className='burgersection-item-image'>
              <Image src={chickenBurger} />
            </div>
            <div className='burgersection-item-text'>
              <h3 className='text-light'><span className='text-primary'>K</span>ylling Burger</h3>
              <p className='lead'>Velsmakende og enkel hjemmelaget kyllingburger med blant annet salat, tomat, løk og ost.</p>
            </div>
          </div>

          <div className='burgersection-item-container'>
            <div className='burgersection-item-image'>
              <Image src={beefBurger} />
            </div>
            <div className='burgersection-item-text'>
              <h3 className='text-light'><span className='text-primary'>B</span>iff Burger</h3>
              <p className='lead'>Jakten på perfekte biff burgere. Denne gangen er det snakk om biffburger med en SUPERGOD asiatisk marinade! Sammen med godt tilbehør vil denne versjonen, skape et smil påmunnen på de fleste.</p>
            </div>
          </div>
          
          <div className='burgersection-item-container'>
            <div className='burgersection-item-image'>
              <Image src={veggyBurger} />
            </div>
            <div className='burgersection-item-text'>
              <h3 className='text-light'><span className='text-primary'>V</span>eggy Burger</h3>
              <p className='lead'>Sikkelig kraftige hjemmelaget veggieburger. Perfekt med grill smak!</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}