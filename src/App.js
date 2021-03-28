import { useState, useEffect } from 'react'
import { Container, Image } from 'react-bootstrap'
import axios from 'axios'

const App = () => {

  const [image, setImage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:4999/api/image').then(res => {
      console.log(res.data)
      setImage(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <Container className="App">
      <h1>HELLO WORLD</h1>
      <Image className='App-Image' fluid src={image} />
    </Container>
  );
}

export default App;
