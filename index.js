var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var multer  = require('multer');
var bodyParser = require('body-parser');
var exec = require('child_process').exec;

app.use(express.static('public'));

var clients = {};

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//   extended: true
// }));

app.use(multer({ dest: './public/uploads' }).single('image'));


app.post('/push', function(req, res){
  var tiles = JSON.parse(req.body.tiles)
  tiles.forEach(function(tile){
    var target = '/tiles/' + req.file.filename + '-' + Math.round(Math.random()*1000) + '.jpg'
    var convertCmd = 'convert public/uploads/' + req.file.filename + ' -crop ' + tile.width + 'x' + tile.height + '+' + tile.topLeftX + '+' + tile.topLeftY + ' public' + target;
    exec(convertCmd , function (error, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      console.log('Publishing ' + target + ' to ' + tile.id);

      io.emit('change', { id: tile.id, url: target });
    });
  });

  res.json({status: true});
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(4000, '0.0.0.0', function(){
  console.log('listening on *:3000');
});