// import { useForm } from "react-hook-form";
import { Form, Button } from 'react-bootstrap'

export default function KontaktForm() {
  /* const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => fetch("http://localhost:5000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }, console.log(data))
  */

  return (
    <>
    {/**
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicName">
        <Form.Label className='text-light'>Navn</Form.Label>
        <Form.Control type="name" placeholder="Vennligst skriv inn ditt navn." {...register("name", { required: true })} />
        {errors.name?.type === 'required' && <span className='text-primary'>Ditt navn er obligatorisk.</span>}
      </Form.Group>

      <Form.Group controlId="formBasicPhone">
        <Form.Label className='text-light'>Telefon</Form.Label>
        <Form.Control type="tel" placeholder="Vennligst skriv inn ditt telefonnummer." {...register("phone")} />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label className='text-light'>E-postadresse</Form.Label>
        <Form.Control type="email" placeholder="Vennligst skriv inn din e-postadresse." {...register("email", { required: true })} />
        {errors.email?.type === 'required' && <span className='text-primary'>Din e-postadresse er obligatorisk.</span>}
      </Form.Group>
      
      <Button variant='primary' type='submit'>SEND INN</Button>
    </Form>
    */}

    <Button href='https://tinyurl.com/49fyk2wm' target="_blank" rel="noopener noreferrer">GÅ TIL SKJEMAET</Button>
    </>
  )
}