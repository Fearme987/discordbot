const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
  var datetochange = "7/21/2017 7:00 PM EST"
  var countDownDate = new Date(datetochange).getTime();

// Update the count down every 1 second

var x = setTimeout(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
       const timer = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (message.content == "checktimer") {
      // Set the date we're counting down to

        message.channel.send('Tournament begins in ' + timer + 'at ' + datetochange);        
       
    };
      }, 1);
      
});




bot.login('MzM0ODYzNjMxMjEwNzc0NTI4.DE2oig.kBTP0zAivz7Upvqmb1Q7A9VUdQY')
