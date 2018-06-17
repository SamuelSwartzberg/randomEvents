//Insert this code in your javascript console in the "discover events" part of a popular social media site. Select your filters beforehand.

scrollToSufficientDepth = function(){
  var counter=0; var interval = window.setInterval(function(){window.scrollTo(0,document.body.scrollHeight); counter++; var whatever = counter>=10 ? window.clearInterval(interval) : "" ; console.log(counter);},1000)
}

getRandomEvent = function(){
  scrollToSufficientDepth();
  var event = getRandomEventURL();
  openRandomEvent();
}

getRandomEvent();

