import { Container } from "react-bootstrap";
import KontaktForm from "./KontaktForm";

export default function SubscribeSection() {
  return (
    <div className='subscribe-outer-container' id='abonner'>
      <Container className='subscribe-inner-container'>
        <div className='subscribe-heading'>
          <div div className='line-left'>
            <hr />
          </div>
          <h2 className='text-light text-center'><span className='text-primary'>T</span>A KONTAKT MED OSS</h2>
          <div className='line-right'>
            <hr />
          </div>
        </div>

        <p className='lead text-light text-center'>Gi oss kontaktinformasjonen din så vi kan sende deg fremtidige tilbud og kampanjer.</p>

        <KontaktForm />
      </Container>
    </div>
  )
}