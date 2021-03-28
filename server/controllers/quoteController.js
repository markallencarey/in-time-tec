const axios = require('axios')

module.exports = {
  getQuote: async (req, res) => {
    await axios.get('http://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand').then(quote => {
      res.status(200).send({
        author: quote.data[0].title.rendered,
        text: quote.data[0].content.rendered
      })
    }).catch(err => {
      console.log(err)
    })
  }
}