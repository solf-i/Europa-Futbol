import React from 'react'
import { MDBCol, MDBRow, MDBIcon } from 'mdbreact'
import { MDBCard, MDBCardBody } from 'mdbreact'

const Contacto = () => {
  return (
    <div className='w-100 my-4'>
      <MDBRow className=' justify-content-center w-100 m-0 mt-3 mb-3'>
        <MDBCol md='4'>
          <MDBCard testimonial>
            <MDBCardBody>
              <MDBIcon icon='user-tie' size='2x' className='light-blue-text' />
              <h4 className='card-title'>Contacto</h4>
              <hr />
              <div className='d-flex col'>
                <h5 className='text-left'>
                  Dr. Fernando Bosch
                  <h5 className='text-left blue-grey-text'>
                    Abogado - Representante
                  </h5>
                </h5>
              </div>

              <div className='d-flex col'>
                <a
                  href='https://wa.me/5491166435700'
                  class='whatsapp'
                  target='_blank'
                  rel='noopener noreferrer'
                  message='Hola!'
                  className='d-flex'
                  style={{
                    textDecorationLine: 'none'
                  }}
                >
                  <MDBIcon
                    fab
                    icon='whatsapp-square'
                    size='3x'
                    className='green-text'
                  />
                </a>
                <h5 className='text-left blue-grey-text pl-4'>Click Me!</h5>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard testimonial className='mt-2 mb-2'>
            <MDBCardBody>
              <MDBIcon
                fab
                icon='instagram'
                size='2x'
                className='light-blue-text'
              />
              <h4 className='card-title'>Seguinos!</h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md='4'>
          <MDBCard testimonial>
            <MDBCardBody>
              <MDBIcon icon='clock' size='2x' className='light-blue-text' />{' '}
              <h4 className='card-title'>Horario de Oficina</h4>
              <hr />
              <h5 className='text-left blue-grey-text w-100'>
                Lunes - Viernes: 09:00 - 18:00 hs.
              </h5>
            </MDBCardBody>
            <MDBCardBody>
              <MDBIcon icon='phone-alt' size='2x' className='light-blue-text' />{' '}
              <h4 className='card-title'>Celular</h4>
              <hr />
              <h5 className='text-left blue-grey-text w-100'>
                (+54) 911 6643 5700
              </h5>
            </MDBCardBody>
            <MDBCardBody>
              <MDBIcon icon='envelope' size='2x' className='light-blue-text' />{' '}
              <h4 className='card-title'>E-mail</h4>
              <hr />
              <h5 className='text-left blue-grey-text w-100'>
                fboschf@gmail.com
              </h5>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  )
}

export default Contacto
