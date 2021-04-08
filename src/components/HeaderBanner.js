import { Container, Button } from "react-bootstrap";

export default function HeaderBanner() {
  return (
    <div className='headerbanner-outer-container'>
      <Container className='headerbanner-inner-container'>
        <h1 className='text-light'><span className='text-primary'>Å</span>PNER SNART!! </h1>
        <h2 className='text-light'> Vi gleder oss til å servere dere...</h2>
        <Button className='headerbanner-cta float-right'>Sjekk ut vår meny</Button>
      </Container>
    </div>
  )
}