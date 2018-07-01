// ==UserScript==
// @name         Random event generator
// @namespace    https://github.com/SamuelSwartzberg/randomEvents
// @version      0.1
// @description  Get a random event. See detaild docs at https://github.com/SamuelSwartzberg/randomEvents
// @author       Samuel Swartzberg
// @match        https://www.facebook.com/events/discovery/*&random
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

var scrollToSufficientDepth = function(amountOfScrolls, delay){
  var counter=0;
  var interval = window.setInterval(
    function(){
      window.scrollTo(0,document.body.scrollHeight);
      counter++;
      if(counter>=amountOfScrolls){
        window.clearInterval(interval);
      }
      console.log(counter);
    },delay);
};

var getRandomEventURL = function() {
  var eventURLs = jQuery("._7ty");
  var randomEventIndex = Math.floor(Math.random()*eventURLs.length);
  var eventURL=jQuery("._7ty")[randomEventIndex].href;
  return eventURL;
};

var openRandomEvent = function(eventURLtoOpen) {
  window.open(eventURLtoOpen,"_self");
};

var getRandomEvent = function(){
  var amountOfScrolls = 100;
  var delay = 1000;
  scrollToSufficientDepth(amountOfScrolls, delay);
  window.setTimeout(function() {
    var eventURL = getRandomEventURL();
    openRandomEvent(eventURL);
  }, amountOfScrolls*delay);
};

getRandomEvent();
