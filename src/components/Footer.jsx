import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className='bg-light py-2 container-fluid'>
      <Row>
          <Col sm={12} md={5}>
          <h3>MediaPlayer 2024</h3>
          <p className='aligntext-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugiat. Illum maxime magnam enim cupiditate, error natus repudiandae blanditiis. Doloribus cum molestias natus quo officiis rerum quasi exercitationem fuga iste!</p>
  
          </Col>
          <Col sm={12} md={2}>
          <h3>Link</h3>
          <div >
            <Link to={'/'}>Landing</Link>
            <Link to={'/Home'}>Home</Link>
            <Link to={'/His'}>History</Link>
          </div>
          </Col>
          <Col sm={12} md={5}>
          <h3>Feedback</h3>
          <input type="textarea" className='form-control'/>
          <button className='btn btn-info mt-2'>Send</button>
          </Col>
      </Row>
      </div>
      
    </>
  )
}

export default Footer
