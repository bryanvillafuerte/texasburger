import { Container } from "react-bootstrap";

export default function BurgerSection() {
  return (
    <div className='burgersection-outer-container'>
      <Container className='burgersection-inner-container'>
        <div className='burgersection-heading-container'>
          <h2 className='text-light text-center'>VÅR MAT</h2>
        </div>
      </Container>
    </div>
  )
}