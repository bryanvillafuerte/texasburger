import { Container } from "react-bootstrap";

export default function HeaderBanner() {
  return (
    <div className='headerbanner-outer-container'>
      <Container className='headerbanner-inner-container'>
        <h1 className='text-light'><span className='text-primary'>L</span>OREM IPSUM</h1>
        <h1 className='text-light'>IPSUM DOLOR SIT</h1>
        <h1 className='text-light'>AMET CONSECTETUR.</h1>
      </Container>
    </div>
  )
}