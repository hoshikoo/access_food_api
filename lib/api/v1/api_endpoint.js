module.exports = function(app) {

  var api = app.express.Router();

  api.get('/', function(req, res, next){

    var data = {success: 1};
    res.json(data);
  
  });

  // api.get('/test', function(req, res, next){
  //   // req.params contains the list of parameters
  //   // if the route was /:id/:name then req.params.name would be available as well 
  //   // var id = req.params.id; 

  //   // var data = {data: id};
  //   // res.json(data);

  //   res.send("test");
  
  // });

  // api.post('/', function(req, res, next){
  //   // req.body is an object containing all the post data submitted.
  //   // when using postman
  //   // - Change request type to POST
  //   // - Select Body under URL to put in values
  //   // - Select x-www-form-urlencoded

  //   var body = req.body; 

  //   var data = {data: body};
  //   res.json(data);
  
  // });


  return api; 
};