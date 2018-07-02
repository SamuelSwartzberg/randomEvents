var scrollToSufficientDepth = function(AMOUNT_OF_SCROLLS, DELAY){
  var counter=0;
  var interval = window.setInterval(
    function(){
      window.scrollTo(0,document.body.scrollHeight);
      counter++;
      if(counter>=AMOUNT_OF_SCROLLS){
        window.clearInterval(interval);
      }
      console.log(counter);
    },DELAY);
};

var getRandomEventURL = function() {
  var eventURLItems = jQuery("._7ty");
  var randomEventIndex = Math.floor(Math.random()*eventURLItems.length);
  var eventURL=jQuery("._7ty")[randomEventIndex].href;
  return eventURL;
};

var getRandomEventURLS = function() {
  var eventURLItems = jQuery("._7ty");
  var AMOUNT_OF_EVENT_URLS = 5;
  var eventURLs = [];
  for (var i = 0; i < AMOUNT_OF_EVENT_URLS; i++) {
    var randomEventIndex = Math.floor(Math.random()*eventURLItems.length);
    eventURLs.push(jQuery("._7ty")[randomEventIndex].href);
  }
};

var openRandomEvent = function(eventURLtoOpen) {
  window.open(eventURLtoOpen,"_self");
};

var getAndOpenRandomEvent = function(){
  var AMOUNT_OF_SCROLLS = 100;
  var DELAY = 1000;
  scrollToSufficientDepth(AMOUNT_OF_SCROLLS, DELAY);
  window.setTimeout(function() {
    var eventURL = getRandomEventURL();
    openRandomEvent(eventURL);
  }, AMOUNT_OF_SCROLLS*DELAY);
};

var getRandomEventLinks = function(){
  var AMOUNT_OF_SCROLLS = 100;
  var DELAY = 1000;
  scrollToSufficientDepth(AMOUNT_OF_SCROLLS, DELAY);
  window.setTimeout(function() {
    var eventURLs = getRandomEventURLS();
    console.log(eventURLs);
  }, AMOUNT_OF_SCROLLS*DELAY);
}

//Choose which function runs

//getRandomEventLinks();
getAndOpenRandomEvent();
