const xhttp = new XMLHttpRequest();

xhttp.open("POST", "URL", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.onload = function () {};

xhttp.onerror = function () {};

xhttp.onprogress = function () {};

const name = encodeURIComponent("Lokesh & Yadav");

xhttp.send("name=lokesg&age=90");
