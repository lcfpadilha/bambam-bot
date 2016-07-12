var TelegramBot = require('node-telegram-bot-api');
var http = require('http');

var token = '220901453:AAHnwqAOTcbwBW8zQRwUyxs1CA5I-Y6OLdA';
var bot = new TelegramBot(token, {polling: true});

// Encontra textos com 13
bot.onText(/(^13$)|(([^0-9]+)13([^0-9]+))|(^13([^0-9]+))|(([^0-9]+)13$)/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = "É TREZE MEMO PORRA!";
  bot.sendMessage(fromId, resp);
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
    console.log('BOORA CUMPADI! SAI DE CASA, SERVI PRA CARALHO NA PORTA 8080!');
});
