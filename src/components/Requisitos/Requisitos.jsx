import React from 'react'
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact'
import Footer from '../Footer/Footer.js'
import Fade from 'react-reveal/Fade'
import './Requisitos.css'

const Requisitos = () => {
  return (
    <section className='p-3 background'>
      <div className='borde'>
        <Fade bottom>
          <h3 className=' h1-responsive font-weight-bold text-center '>
            Requisitos
          </h3>
        </Fade>

        <Fade bottom>
          <h4 className='lead w-responsive text-center p-2 mx-auto mb-5 font-weight-bold'>
            Para ser considerado como un jugador a pasar al fútbol europeo.
          </h4>
        </Fade>

        <MDBRow>
          <MDBCol lg='12' className='m-3' style={{ fontSize: '1.2rem' }}>
            <MDBRow className='mb-3'>
              <MDBCol size='1'>
                <MDBIcon icon='check' size='lg' className='light-blue-text' />
              </MDBCol>
              <MDBCol xl='10' md='11' size='10' className='text-left'>
                <Fade bottom>
                  <p className='text-left font-weight-normal'>
                    Tener entre 16 y 21 años de edad (para los menores de 18 se
                    exige el apoyo de los padres para ir a Europa).
                  </p>
                </Fade>
              </MDBCol>
            </MDBRow>
            <MDBRow className='mb-3'>
              <MDBCol size='1'>
                <MDBIcon icon='check' size='lg' className='light-blue-text' />
              </MDBCol>
              <MDBCol xl='10' md='11' size='10' className='text-left'>
                <Fade bottom>
                  <p className='text-left font-weight-normal'>
                    Jugar en una liga competitiva (preferentemente de la LIGA
                    PROFESIONAL o de la PRIMERA NACIONAL B de Argentina, similar
                    o superior).
                  </p>
                </Fade>
              </MDBCol>
            </MDBRow>
            <MDBRow className='mb-3'>
              <MDBCol size='1'>
                <MDBIcon icon='check' size='lg' className='light-blue-text' />
              </MDBCol>
              <MDBCol xl='10' md='11' size='10' className='text-left'>
                <Fade bottom>
                  <p className='text-left font-weight-normal'>
                    Mandarnos un video de varios partidos en esa liga, donde se
                    aprecie sus calidades como jugador.
                  </p>
                </Fade>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </div>

      <Footer />
    </section>
  )
}

export default Requisitos
//<Fade bottom></Fade>
