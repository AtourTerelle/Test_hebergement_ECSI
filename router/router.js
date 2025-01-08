
module.exports = function(app) {
    const TestController = require('../Controller/test');
 //  const jwt = require('../middleware/verifyJwtToken');
    // se connecter
  //  app.post('/login',                                                  UtilisateurController.login);
    //TEST
    app.post('/data',TestController.testfonction);
}

