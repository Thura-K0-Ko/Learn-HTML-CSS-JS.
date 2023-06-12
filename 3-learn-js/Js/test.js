

const cars=["BMW", "VOLVO", "SAAB", "FORD"];

let len,text,i;
for(i= 0, len= cars.length, text="";i< len; i++){
    text+= cars[i] + "<br>";
}
document.getElementById ("demo").innerHTML = text;