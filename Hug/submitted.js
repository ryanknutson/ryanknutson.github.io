var currentUrl = document.URL;  //Get Current URL of page

var shareUrl = currentUrl.replace("submitted", "index");  //Prepare URL for sharing

document.getElementById("maincontent").innerHTML = shareUrl;  //Print share URL to page


var fbLink = 'https://www.facebook.com/sharer/sharer.php?u=' + shareUrl;
var twitterLink = 'http://twitter.com/share?text=I%20sent%20you%20a%20hug!&url=' + shareUrl;

document.getElementById("fbButton").onclick = function () {
    location.href = fbLink;
};

document.getElementById("twitterButton").onclick = function () {
    location.href = twitterLink;
};