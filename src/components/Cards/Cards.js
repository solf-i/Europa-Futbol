import React from 'react'
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact'
import Carousel2 from '../Carousel/Carousel2.jsx'
import Fade from 'react-reveal/Fade'

const Cards = () => {
  return (
    <section className='text-center my-2 p-3'>
      <MDBRow>
        <MDBCol md='4'>
          <MDBIcon icon='futbol' size='3x' className='light-blue-text' />
          <Fade bottom>
            <h4 className='font-weight-bold my-4 ' id='h4'>
              Llevamos jugadores de fútbol a equipos europeos
            </h4>
            <h5 className='font-weight-bold my-4 blue-grey-text'>
              Mandanos tu video
            </h5>
            <h6
              className='font-weight-normal mb-md-0 mb-5'
              style={{ fontSize: '1.2rem' }}
            >
              Si del análisis de tu video mostrándote en todas tus virtudes como
              jugador, consideramos que sos apto para ir a Europa a jugar, te
              llamaremos para una entrevista.
            </h6>
          </Fade>
        </MDBCol>
        <MDBCol md='4'>
          <MDBIcon icon='chart-line' size='3x' className='light-blue-text' />
          <Fade bottom>
            <h4 className='font-weight-bold my-4 '>
              Te ayudamos a posicionarte para poder aspirar al fútbol europeo
            </h4>
            <h5 className='font-weight-bold my-4 blue-grey-text'>
              Devolución de nuestro Asesor Deportivo
            </h5>
            <h6
              className='font-weight-normal mb-md-0 mb-5'
              style={{ fontSize: '1.2rem' }}
            >
              Si te interesa conocerte para mejorar, nuestro Asesor Deportivo
              con trayectoria en equipos de primera A, tanto como jugador y
              capitán, en Argentina y en el Exterior, así como también DT, te
              dará una opinión fundamentada en base al video que nos mandes y
              otras maneras de observar tu juego.
            </h6>
          </Fade>
        </MDBCol>
        <MDBCol md='4'>
          <MDBIcon far icon='user' size='3x' className='light-blue-text' />
          <Fade bottom>
            <h4 className='font-weight-bold my-4'>Premisas de la empresa</h4>
            <h5 className='font-weight-bold my-4 blue-grey-text'>
              El protagonista principal es EL JUGADOR
            </h5>
            <h6
              className='font-weight-normal mb-md-0 mb-5'
              style={{ fontSize: '1.2rem' }}
            >
              Nosotros somos representantes y hablamos con otros representantes
              y clubes, ya que nadie se quedará fuera de lo que surja si se da
              el pase a Europa, siempre que legalmente corresponda. Pero lo más
              importante y el que decide sobre su vida y su futuro es el
              jugador, escuchando a su famiia y seres queridos.
            </h6>
          </Fade>
        </MDBCol>
      </MDBRow>
      <br /> <br />
      <Carousel2 />
    </section>
  )
}

export default Cards
