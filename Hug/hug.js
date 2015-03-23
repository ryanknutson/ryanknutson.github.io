function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

var sen = getQueryVariable('sender');  //Get the senders name
var sensp = sen.split('+').join(' ');  //Remove the plus sign from their name

var rec = getQueryVariable('recipient');  //Get the recipients name
var recsp = rec.split('+').join(' ');     //Remove the plus sign from their name

if(sen == '') {
	sensp = 'Someone';
}


if(rec == '') {
	recsp = 'there';  //If name is blank show 'there'
} else {              //If normal, print name to recsp
	document.getElementById("yourname").value=recsp;  //Sets the recipients name into the form (as a new sender)
}


var final = 'Hello ' + recsp + '!' + '<br />' + sensp + ' sent you a hello!';  //Add the senders and recipients name to the string 'final'

document.getElementById("maincontent").innerHTML = final;  //Set 'maincontent' to the content of 'final'