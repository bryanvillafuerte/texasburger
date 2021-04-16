import { Container, InputGroup, FormControl, Button } from "react-bootstrap";

export default function SubscribeSection() {
  return (
    <div className='subscribe-outer-container' id='abonner'>
      <Container className='subscribe-inner-container'>
        <div className='subscribe-heading'>
          <div div className='line-left'>
            <hr />
          </div>
          <h2 className='text-light text-center'><span className='text-primary'>A</span>BONNER NÅ</h2>
          <div className='line-right'>
            <hr />
          </div>
        </div>

        <p className='lead text-light text-center'>Abonner nå for å motta nye tilbud på e-post.</p>

        <InputGroup className='mx-auto'>
          <FormControl
            placeholder="E-post adresse"
            aria-label="E-post adresse"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="primary">Send inn</Button>
          </InputGroup.Append>
        </InputGroup>
      </Container>
    </div>
  )
}