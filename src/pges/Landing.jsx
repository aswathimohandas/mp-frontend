import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
    <div className='p-4 d-flex align-items-center' style={{height:'80vh'}}>
      <Row>
      <Col className='cols=6' sm={12} md={6}>
        <h3><i className="fa-brands fa-youtube fa-beat" style={{color: "#f80d30",}} />
          Media Player 2024</h3>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit debitis adipisci non dolor dicta dolore? Modi unde illo
             ratione doloribus at, cupiditate eius sequi saepe? Commodi dolorum eos modi officiis.</p>
             <div className='d-grid'>
              <Link to={'/log'} className='btn btn-success'>Let's Go</Link>
             </div>
      </Col>
      <Col className='py-4 d-grid' sm={12} md={6}>
      <img src="data:image/jpeg;base64,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b73HBzvAYeJ4IO6QEBAQEBAQEBAQEHxzQQQQCCLEHEEIOD03oQ0jttgJgv1Tn0RP2T3cD/OYVGSttYHEoJYygsMKCdhQTtKCVrkGYcgFyDBzkEbiggeUEDygryFBEZG2sdxuEGeitFvrHkC7YwfpZOH4W/i8vMO/pqdkTGxsAaxoAa0bgEEqAgICAgICAgICAgIMXsDgWuAIIIIIuCDmCEHJ6U1QsS+lIG8wvOH6XbuR94QaOUSwnZmY+M/iGB5OyPgUEsVU070FplQ3igmbUN4oJG1DeKDMVDeKB8obxQYmobxQROqG8UEL6hvFBXkqW8UEN3SHZia6R28MbtW58PFBtdG6pSSEPqjsN+6YbuPc52Q8L8wg6+mp2RNEcbQxoFg1osAglQEBAQEBAQEBAQEBAQEBB8IvgcR3oKcmiKZ2Jhivx2Gg++yDH5lpvuY/hQPmam+6j9yD78z033TPcgfNFP8AdM9yB80U/wB0z3IHzPT/AHTPcgfM1N91H7kHz5lpvuY/hQZR6Ipm5QxeLAUFtjA0WAAHACwQZICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/2Q==" alt="" />
      </Col>
      </Row>
      </div>
      <h3 className='text-center p-3'>Features</h3>
      <div className='d-flex justify-content-around p-5'>
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEXBOSv////ANCX25+by3Nrw1tTANie8GwC7FAC/Lh2+JxK6CwDAMSHpwL3ty8jx2dfks6+9Igr68O/LX1bIVkzNa2PhqqbRd2++KRf9+fndnZnGTkPDQDPPcWnERjrUgHnYjYfblpEjN+dAAAAB7ElEQVR4nO3Y23KqMBQG4BgSAmk4GZSIKPj+L9mI7d7uBNxcdFbbmf+7UpmRf1bW5MQYAAAAAAAAAAAAAAAAAAAAAPxOKecmz51ulFJZ9vZHlmVKNdrlueE8JY1kzLW1h26cbn1dF2VZyqoSoqqk/1gU9bGfxu5g2ys3dJlcW552G5zkQVNlMjbZEmmO1eVEoVS1NdNut29oMpk2LMerwhGVyk3Be5Prcb3FjjSl0n04RGc9FGuxCppQTR2F4lwdVhqtJApVhKFa7jvNdfulUJJmUmjKpVB+WIdwXO8qmkbXcjkUS91QR60laNYatxaKMa4u4UMxkKQyYUv/DeUfqk788zC5koTi4kUoX8ihfx7D5PxNoexzKJbqvP7podqfEMqx7xi+uNGfQkVTO1Gju/VQaWPDmZUoVDx5fobKXR9PnowkVLzMPEIZNy6sfoL/7/++JlS0IN9DcX0OKziTjiZUtHXxoZoh/PUD0dYl3uRZ7W5rW2KiTV60Hd6fu8WRmxFth40N3nuSL06BI01PMbX52OcD50Rnd9NtOh/PJqJC+Va/hMvfimQkO7b7qZvZSzfdjnVRlFKI5JmoZPm447hYRnVon6XcPO6BPq6BMjV7fPu8DTLEd0EAAAAAAAAAAAAAAAAAAAAA8GXeASElGwZSrf2ZAAAAAElFTkSuQmCC" />
      <Card.Body>
        <Card.Title>Upload Youtube Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="data:image/png;base64,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" />
      <Card.Body>
        <Card.Title>Add Category</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACUCAMAAADvY+hPAAAArlBMVEVpubT/bVo7RU7///9RUU04P0k6Q01nrqo0PkiDiI4/VFkuOUNotLD/9PJdlJQ3PUZAUVhZYmf9085obnQgLTq0t7n8Y0/3f2/56eb419RLbXAqND8UIi9CQj6kpKNFTktaUU3ubV3HZlo9TUqLWlLkbV6VWVBin51AXmNGT1fyVD22YlhpUk70bFuEWVJyVlB6eniIiYbs7Ozb29s3NzZmZmPTZ1lcXFmnX1VTf4HY4AK/AAAB4klEQVR4nO3a2U7CQBhAYWxlQBFBBRQBu0ALyiKggrz/i9myVExKNV0HPN9te3Ey+ZmZpORyAAAAAAAAAAAAAAD8B4W4JV7cH1Qv41V9vEo2uVDNi5gplYSjrytK7EQ12fHwmoul6ES6zcW7i+ieRarNtboa3V2R5lNtLt+G1ixn1Nx8aYR1/5BVc+MsLJpppplmmmk+6WbDNE3jmJrHw1HXNRqOj6XZmmjauUvTegfWWrZm43VTvK6e+Een3iwCm8eT72Q32nc80m4u1QKbza7bOl12ttGmDM2ttghqdiejM5u/zd63Cy1Hc9A6G7oT2nlyHs8/NkvtNxxesxASNC+0XbOq1pdusxXQ3GqXJGg295rVqdu8ONwsau2ayL55ce41z2fr2TAC1rkkxTp78zyvd9bzrAfOsxz7xnp7nr7Vp5tfoGb7vZT6/tz6w/689A4Vv3GW7uy2f5yDn77vyNZs9PbuG7b/zU625rOx3d3d6w4ky9fs3Ebtka7rI9vvOJG12Vlry7IOXfhlbf4FzTTTTDPNNB9/c+jvgy9GVs1qObysvh1HRfNJNovnm+gUJdVmRRSjS7s5Rkk3FwaVfNwqq0STc7n+6jFuq4T/x+i4ilvixQAAAAAAAAAAAACA0/MF1/iLB+HbwaAAAAAASUVORK5CYII=" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div>
        <Row>
          <Col sm={12} md={6}>
          <h3 className='p-2'>Simple and Faster</h3>
          <p className='justify-content p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quod soluta iusto, ex harum at ut, neque corporis quidem voluptatibus nihil! Praesentium deserunt nam, aliquam architecto velit atque! Ex, reprehenderit.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum magni animi quam eaque libero! Ipsam obcaecati non impedit ex odio. Quia illum similique, distinctio labore dolorum asperiores nobis dignissimos sunt?

          </p>
          </Col>
          <Col className='p-3'>
          <iframe width="600" height="300" src="https://www.youtube.com/embed/W6NZfCO5SIk" title="JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
      </>
      
      
    
  )
}

export default Landing
