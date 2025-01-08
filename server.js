let http = require("http");
var express = require('express')
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser')
const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = process.env.SUPABASE_PROJET
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase;

app.use(bodyParser.json({
  verify: (req, res, buf) => {
    req.rawBody = buf
  }
}))



require('./router/router.js')(app);



srv = http.createServer({
    },app).listen(4433, function () {
      var port = srv.address().port
      console.log("im listening on port "+port);
    })


    app.get('/data', async (req, res) => {
      console.log("Requête reçue sur /data");
    
      const { data, error } = await supabase
        .from("TEST") 
        .select('*');
    
      console.log("Données retournées :", data);
      console.log("Erreur :", error);
    
      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }
      
      res.json(data);
    });
    