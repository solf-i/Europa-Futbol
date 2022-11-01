import React from 'react'
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact'
import Fade from 'react-reveal/Fade'
import Footer from '../../components/Footer/Footer.js'
import './Nosotros.css'

const Nosotros = () => {
  return (
    <section className='text-center section'>
      <div className='contenido'>
        <MDBRow>
          <MDBCol md='12' className='text-center my-4'>
            <MDBIcon icon='user-tie' size='3x' className='light-blue-text' />
            <Fade bottom>
              <h4 className='font-weight-bold my-4 px-5'>
                EUROPA FUTBOL nació como un empresa que descubre buenos
                jugadores para proponerles una prueba en el futbol europeo.
              </h4>
            </Fade>
            <Fade bottom>
              <p className='mb-5 px-5 h5 font-weight-normal text-justify'>
                Soy abogado, vivo en Buenos Aires (CABA) y tengo 50 años. Me he
                dedicado al fútbol toda mi vida, especializándome hace más de un
                año en llevar jugadores locales al fútbol europeo, con la ayuda
                de un Asesor Deportivo con trayectoria en varios equipos de
                Primera División A de Argentina y el extranjero, además de
                experiencia como DT.
              </p>
            </Fade>

            <Fade bottom>
              <p className='mb-5 px-5 h5 font-weight-normal text-justify'>
                Si tenés entre 16 y 20 años, ya jugás en una liga competitiva,
                como la Primera División B del Futbol Argentino y querés ir a
                probarte en Europa, nosotros te asesoramos y te facilitamos
                todo, una vez analizado tu video. Te citaremos a una entrevista
                para ver la posibilidad de viajar a Roma, donde tendrás que
                jugar algunos partidos de fútbol para determinar si te contrata
                un equipo de la A, B o C de Europa. Se contemplan casos
                excepcionales de venta directa.
              </p>
            </Fade>
            <Fade bottom>
              <h2
                className='font-weight-bold light-blue-text my-5'
                style={{ fontFamily: 'Kaushan Script' }}
              >
                Dr. Fernando Bosch
              </h2>
            </Fade>
          </MDBCol>
        </MDBRow>
      </div>

      <div className='p-3 mx-auto'>
        <Footer />
      </div>
    </section>
  )
}

export default Nosotros
