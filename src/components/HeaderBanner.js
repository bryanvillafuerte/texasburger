import { Container, Button } from "react-bootstrap";

export default function HeaderBanner() {
  return (
    <div className='headerbanner-outer-container'>
      <Container className='headerbanner-inner-container'>
        <h1 className='text-light'><span className='text-primary'>L</span>OREM IPSUM DOLOR SIT AMET CONSECTETUR.</h1>
        <Button className='headerbanner-cta float-right'>Sjekk ut vår meny</Button>
      </Container>
    </div>
  )
}