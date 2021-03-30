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
    // height: '100',
    // width: '100',
    // margin: 0,
    // objectFit: 'cover',
    // backgroundRepeat: 'no-repeat',
  // backgroundColor: 'red'
}

return (
  <div
    className='App'
    style={styles}
  >
    {/* <Image
        className='image'
        src={image}
      /> */}
    <Button
      variant='light'
      onClick={getNewImage}
      className='newImgBtn'
    >
      Get New Image
    </Button>
    <Container>
      <Row className='row1'>
        <Col />
        <Col>
          <Time />
        </Col>
        <Col />
      </Row>
      <Row className='row2'>
        <Col>
          <Weather />
        </Col>
        <Col>
          <Quote />
        </Col>
      </Row>
    </Container>
  </div>
);
}

export default App;
