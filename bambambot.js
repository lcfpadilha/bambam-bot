var TelegramBot = require('node-telegram-bot-api');
var http = require('http');

var token = '220901453:AAHnwqAOTcbwBW8zQRwUyxs1CA5I-Y6OLdA';

// Setup polling way
var bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/(.*[^1-9]+)13([^1-9]+.*)/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = "É TREZE MEMO PORRA!";
  bot.sendMessage(fromId, resp);
});

// Any kind of message
bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'cats.png';
  bot.sendPhoto(chatId, photo, {caption: 'Lovely kittens'});
});

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
        response.writeHead(200, {'Content-Type': 'text/plain'});
          response.write("Welcome to Node.js on OpenShift!\n\n");
          response.end("Thanks for visiting us! \n");
});

server.listen( port, ipaddress, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});
