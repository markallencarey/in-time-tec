import axios from "axios"
import React, { useEffect, useState } from "react"
import { Container, Button } from 'react-bootstrap'

const Quote = () => {

  const [quote, setQuote] = useState({})

  const renderHTML = (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

  useEffect(() => {
    axios.get('http://localhost:4999/api/quote').then(res => {
      // console.log(res.data)
      setQuote(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  function getNewQuote() {
    axios.get('http://localhost:4999/api/quote').then(res => {
      // console.log(res.data)
      setQuote(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <Container className='Quote'>
      <Container className='quote-text'>
        <h5>{renderHTML( quote.text )}</h5>
      </Container>
      <Container className='quote-author'>
        <p>-{quote.author}</p>
      </Container>
      <Button
      variant='light'
      onClick={getNewQuote}
      className='newQuoteBtn'
    >
      Get New Quote
    </Button>
    </Container>
  )
}

export default Quote