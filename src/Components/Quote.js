import axios from "axios"
import React, { useEffect, useState } from "react"
import { Container, Button } from 'react-bootstrap'

const Quote = () => {

  const [quote, setQuote] = useState({})
  const [isHovering, setIsHovering] = useState(false)

  const renderHTML = (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

  useEffect(() => {
    axios.get('http://localhost:4999/api/quote').then(res => {
      setQuote(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  function getNewQuote() {
    axios.get('http://localhost:4999/api/quote').then(res => {
      setQuote(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  function handleMouseHover() {
    setIsHovering(!isHovering)
  }

  return (
    <Container className='Quote'
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
    >
      <Container className='quote-text'>
        <h5>{renderHTML(quote.text)}</h5>
      </Container>
      <Container className='quote-author'>
        {isHovering ? <h5>{renderHTML(`- ${quote.author}`)}</h5> : <h5>{renderHTML('&nbsp;')}</h5>}
      </Container>
      <Button
        variant='light'
        onClick={getNewQuote}
        className='newQuoteBtn'
        size='sm'
      >
        <h5 className='m-auto'>Get New Quote</h5>
      </Button>
    </Container>
  )
}

export default Quote