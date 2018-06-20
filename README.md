# randomEvents

Get random events from a popular social media site, using only client-side Javascript.

# How it works

This code only works on this page: https://www.facebook.com/events/discovery/ (Disclaimer: It works on my version of this page, facebook is known to have different features for different people.) It scrolles down a bunch of times, then creates a list of all the events loaded, and chooses one at random.

# How to use it

Navigate to your version of Facebooks Discover Events (probably: https://www.facebook.com/events/discovery/), and set your date&time range as well as your location. Then, you have two options:

## Option 1 (recommended): The bookmarklet

Add a bookmark, preferrably to your bookmark bar. Give it a name of your choice, and copy the line of code from bookmarklets.js *in its entirety*. Press ok, and whenever you want to use it, just be on the page mentioned above, and click the bookmark. Wait a bit (100 seconds, to be precise), then, after a lot of scrolling, it should have picked an event for you. Congrats and have fun!

## Option 2: The console

Open your Javascript Console ([Here's how](https://webmasters.stackexchange.com/questions/8525/how-do-i-open-the-javascript-console-in-different-browsers)), copy&paste the whole code in the .js file, and press enter. Wait a bit (100 seconds, to be precise), then, after a lot of scrolling, it should have picked an event for you. Congrats and have fun!

# How to trust it

When you open up the developers console, facebook will tell you that "This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a Facebook feature or "hack" someone's account, it is a scam and will give them access to your Facebook account." or something similar. 
They aren't wrong, in that this is a potential attack vector. A script pasted in the console could do a lot of malicious stuff to one's account. I invite the code-savy who use this to check the javascript file before you use it. 
