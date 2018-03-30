const xmlController = require('../controllers').xml
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the API!!!!',
  }));

  app.post('/api/readXml', xmlController.read)
};