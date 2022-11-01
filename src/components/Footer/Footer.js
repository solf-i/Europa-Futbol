import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from 'mdbreact'
import { MDBTable, MDBTableBody } from 'mdbreact'
import './Footer.css'

const Footer = () => {
  return (
    <MDBFooter className='font-small pt-0 mt-0 color'>
      <MDBContainer fluid className='text-left text-md-left'>
        <MDBRow>
          <MDBCol md='10'>
            <h5 className='title pt-3'>Contacto:</h5> <br />
            <MDBTable borderless>
              <MDBTableBody>
                <tr>
                  <td className='white-text text-left d-flex p-0 row-2'>
                    <h5 className='text-left pl-0'>Dr. Fernando Bosch</h5>
                  </td>
                  <tr>
                    <td className='white-text text-left d-flex p-0 row-2'>
                      <h6 className='text-left'>Abogado - Representante</h6>
                    </td>
                  </tr>
                </tr>

                <tr>
                  <td className='light-green-text text-left d-flex py-2 pl-0 row-2'>
                    <a
                      href='https://wa.me/5491166435700'
                      class='whatsapp'
                      target='_blank'
                      rel='noopener noreferrer'
                      message='Hola!'
                      className='d-flex'
                      style={{ textDecorationLine: 'none' }}
                    >
                      <td className='white-text h1 text-left d-flex p-2 '>
                        <MDBIcon
                          fab
                          icon='whatsapp-square'
                          className='green-text'
                        />
                      </td>
                      <td className='d-flex p-3 '>
                        <h5 className='text-left white-text'>WhatsApp</h5>
                      </td>
                    </a>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
          <MDBCol md='2'>
            <MDBTable borderless>
              <MDBTableBody>
                <tr>
                  <td className='white-text'>
                    <h5> Seguinos!</h5> <br />
                    <MDBIcon fab icon='instagram' size='3x' />
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>&copy; Europa Fútbol 2022</MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
