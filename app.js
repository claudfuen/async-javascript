let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let img = document.getElementById("photo");
let price = document.getElementById("price");

btn.addEventListener("click", function() {
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
            img.setAttribute("src", JSON.parse(XHR.responseText).message);
        }
    };

    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();
});

btn2.addEventListener("click", function() {
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
            price.innerText = "$" + JSON.parse(XHR.responseText).bpi.USD.rate;
        }
    };

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
});
