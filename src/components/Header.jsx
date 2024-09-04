import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
  const nav=useNavigate()
  const lgout=()=>{
    nav('/')
    sessionStoage.removeItem('userData')
  }
  return (
    <>

<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-brands fa-youtube fa-beat" style={{color: "#f80d30",}} />
            {' '}
            MediaPlayer
          </Navbar.Brand>
        </Container>
        <button className='btn btn-danger' onClick={lgout}>LogOut</button>
      </Navbar>
    
    </>
  )
}

export default Header
