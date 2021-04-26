import { Container } from "react-bootstrap";

export default function HeaderBanner() {
  return (
    <div className='headerbanner-outer-container'>
      <Container className='headerbanner-inner-container'>
        <h1 className='text-light animate__animated animate__fadeInUp'><span className='text-primary'>V</span>ELKOMMEN TIL EN SMAKSFULL GLEDE. </h1>
      </Container>
    </div>
  )
}