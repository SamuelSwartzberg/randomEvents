// ==UserScript==
// @name         Random event generator
// @namespace    https://github.com/SamuelSwartzberg/randomEvents
// @version      0.2
// @description  Get a random event. See detaild docs at https://github.com/SamuelSwartzberg/randomEvents
// @author       Samuel Swartzberg
// @match        https://www.facebook.com/events/discovery/*&random
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @updateURL    https://raw.githubusercontent.com/SamuelSwartzberg/randomEvents/master/randomEventsTampermonkey.js
// @downloadURL  https://raw.githubusercontent.com/SamuelSwartzberg/randomEvents/master/randomEventsTampermonkey.js
// ==/UserScript==

/*
*
* Core code follows!
*
*/


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

var pickWellTimedRandomEvent = function() {
  var eventItems = jQuery("._5lqg");
  var pickedEvent = false;
  var randomEventDateTime = "";
  var randomEventURL = "";
  do {
    var randomEventIndex = Math.floor(Math.random()*eventItems.length);
    var randomEvent = eventItems[randomEventIndex];
    randomEventURL=jQuery(randomEvent).find("._7ty")[0].href;
    randomEventDateTime += jQuery(randomEvent).find("._5x8v")[0].innerText;
    randomEventDateTime += jQuery(jQuery(randomEvent).find("._42ef span")[0])[0].innerText.split("·")[0];
    pickedEvent = window.confirm("Do you have time at:" + randomEventDateTime);
    randomEventDateTime = "";
  } while (pickedEvent === false)
  return randomEventURL;
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

var getRandomEventWhenYouHaveTime = function(){
  var AMOUNT_OF_SCROLLS = 500;
  var DELAY = 1000;
  scrollToSufficientDepth(AMOUNT_OF_SCROLLS, DELAY);
  window.setTimeout(function() {
    var eventURL = pickWellTimedRandomEvent();
    openRandomEvent(eventURL);
  }, AMOUNT_OF_SCROLLS*DELAY);
}
//Choose which function runs

//getRandomEventLinks();
//getAndOpenRandomEvent();
getRandomEventWhenYouHaveTime();
