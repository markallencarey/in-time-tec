const axios = require('axios')

module.exports = {
  getImage: async (req, res) => {
    await axios.get('http://splashbase.co/api/v1/images/random').then(image => {
      res.status(200).send(image.data.url)
    }).catch(err => {
      console.log(err)
    })
  }
}