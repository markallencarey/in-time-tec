import { useState, useEffect } from 'react'
import { Button, Row, Col, Container } from 'react-bootstrap'
import axios from 'axios'
import Weather from './Components/Weather'
import Time from './Components/Time'
import Quote from './Components/Quote'

const App = () => {

  const [image, setImage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:4999/api/image').then(res => {
      setImage(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  function getNewImage() {
    axios.get('http://localhost:4999/api/image').then(res => {
      setImage(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  const styles = {
    backgroundImage: `url(${image})`,
  }

  return (
    <div
      className='App'
    >
      <div
        className='hero-img'
        style={styles}
      >
        <Button
          variant='light'
          onClick={getNewImage}
          className='newImgBtn'
          size='sm'
        >
          <h5 className='m-auto'>Get New Image</h5>
        </Button>
        <Container className='content'>
          <Row className='row1'>
            <Col>
              <Time />
            </Col>
          </Row>
          <Row className='row2'>
            <Col sm={12} md={6}>
              <Weather />
            </Col>
            <Col sm={12} md={6}>
              <Quote />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
