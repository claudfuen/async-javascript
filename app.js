/**
 * Callback is a function we pass into an other fucntion
 
Higher order functions take in callbacks as a param (fn)
then executes the callback;
fn();


- Advanced Array methods
- Browser Events
- AJAX Requests
- React Development

 */


//  function sendMessage (message, callback) {
//      return callback(message);
//  }

//  sendMessage("Message for console", console.log);
//  sendMessage("Message for alert", alert);

//  var answer = sendMessage("Are you sure?", confirm); 


let btn = document.getElementById("btn");
let img = document.getElementById("photo");

btn.addEventListener('click', function() {
    var XHR = new XMLHttpRequest();


    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            img.setAttribute("src", JSON.parse(XHR.responseText).message);
        }
    }

    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();
});