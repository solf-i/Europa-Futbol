import React from 'react'
import { MDBRow, MDBCol } from 'mdbreact'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Header.css'

const Header2 = () => {
  return (
    <>
      <div className='background2'>
        <MDBRow>
          <MDBCol md='12' className='m-0 p-0 '>
            <Navbar
              collapseOnSelect
              expand='lg'
              style={{
                background: 'rgba(21, 65, 124, 0.7)'
              }}
            >
              <Container>
                <Navbar.Brand
                  href='/'
                  style={{
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                  className='pl-3'
                >
                  Dr. Fernando Bosch
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav className='me-auto'>
                    <Nav.Link
                      className='font-weight-normal white-text'
                      href='/'
                    >
                      Home
                    </Nav.Link>

                    <Nav.Link
                      href='/nosotros'
                      className='font-weight-normal white-text'
                    >
                      Sobre Nosotros
                    </Nav.Link>
                    <Nav.Link
                      href='/contacto'
                      className='font-weight-normal white-text'
                    >
                      Contacto
                    </Nav.Link>
                  </Nav>
                  <Nav></Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <div className='text-white d-flex flex-column align-items-right py-5 px-4 text'>
              <h1
                className='font-weight-bold display-1 text-right px-5'
                style={{ fontFamily: 'Kaushan Script' }}
              >
                <strong>Europa Fútbol</strong>
              </h1>
              <h4 className='pb-3 text-right px-4'>
                Profesionales del Deporte
              </h4>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  )
}

export default Header2
//<MDBCard
//className='card-image  m-0 p-0'
//style={{
//  backgroundImage: 'url(https://i.ibb.co/3WFSgqx/estadio.png',
//  backgroundRepeat: 'no-repeat',
//  backgroundSize: 'cover',
//  height: '500px'
//}}
//></MDBCard>
