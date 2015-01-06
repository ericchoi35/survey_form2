module.exports = function Route(app){
  app.get('/', function(req, res){
    res.render('index', {title:'Survey Form', session_data:req.session});
  });

  app.io.route('send_results_to_server', function(req){
    console.log(req.data);
    var message1 = "You emitted the following information to the server: { name: '" + req.data.name + "', location: '" + req.data.location + "', language: '" + req.data.language + "', comment: '" + req.data.comment + "' }";

    var number1 = Math.floor(Math.random() * 100);

    req.io.emit('send_results_to_client', { message: message1, number: number1})
  });

  // app.post('/process', function(req, res){
  //   console.log('POST INFO', req.body); //notice that the post information is stored in req.body
  //   req.session.name = req.body.name;
  //   req.session.language = req.body.language;
  //   req.session.location = req.body.location;
  //   req.session.comment = req.body.comment;
  //   req.session.sessionID = req.sessionID; //unique sessionID for the user
  //   req.session.save(function() {
  //      res.redirect('/result');
  //   });
  // });

  // app.get('/result', function(req, res){
  // 	res.render('result', {title:'Survey Form', session_data:req.session});
  // });
}