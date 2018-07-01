# randomEvents

Get random events from a popular social media site, using only client-side Javascript.

# How it works

This code only works on this page: https://www.facebook.com/events/discovery/ (Disclaimer: It works on my version of this page, facebook is known to have different features for different people.) It scrolles down a bunch of times, then creates a list of all the events loaded, and chooses one at random.

# How to use it

## Option 1 (recommended): The bookmarklet

Add a bookmark, preferrably to your bookmark bar. Give it a name of your choice, and, as the address, copy the line of code from bookmarklets.js *in its entirety*. This is what it should look like: ![The bookmarklet](bookmarkletExample.png?raw=true) Press ok. Whenever you want to use it, visit Facebooks Discover Events Page (probably: https://www.facebook.com/events/discovery/), and set your date&time range as well as your location. Click the bookmark, wait a bit (100 seconds, to be precise), then, after a lot of scrolling, it should have picked an event for you. Congrats and have fun!

## Option 2: The console

Navigate to your version of Facebooks Discover Events (probably: https://www.facebook.com/events/discovery/), and set your date&time range as well as your location. Open your Javascript Console ([Here's how](https://webmasters.stackexchange.com/questions/8525/how-do-i-open-the-javascript-console-in-different-browsers)), copy&paste the whole code in the .js file, and press enter. Wait a bit (100 seconds, to be precise), then, after a lot of scrolling, it should have picked an event for you. Congrats and have fun!

## Option 3: Tampermonkey/Greasemonkey (advanced)

(Courtesy of Xavier De Leon)  
Create a script in your UserScript Manager of choice, paste the contents of randomEventTampermonkey.js into it & save it. Navigate to your version of Facebooks Discover Events (probably: https://www.facebook.com/events/discovery/), and set your date&time range as well as your location. Add &random to the end of the URL, and voilá!
Wait a bit (100 seconds, to be precise), then, after a lot of scrolling, it should have picked an event for you. Congrats and have fun!

# How to trust it

When you open up the developers console, facebook will tell you that "This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a Facebook feature or "hack" someone's account, it is a scam and will give them access to your Facebook account." or something similar.
They aren't wrong, in that this is a potential attack vector. A script pasted in the console could do a lot of malicious stuff to one's account. I invite the code-savy who use this to check the javascript file before you use it.
