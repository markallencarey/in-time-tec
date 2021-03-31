const axios = require('axios')

module.exports = {
  getQuote: async (req, res) => {
    await axios.get('https://api.quotable.io/random').then(quote => {
      res.status(200).send({
        author: quote.data.author,
        text: quote.data.content
      })
    }).catch(err => {
      console.log(err)
    })
  }
}