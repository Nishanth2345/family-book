var images = ["mom.jpg", "dad.jpg", "brother.jpg", "sister.png"];
var names = ["arathi", "ganesh", "nishanth", "navya"];
var i = 0;

function next(){
    document.getElementById("image").src = images[i];
    document.getElementById("name").innerHTML = names[i];
    i++;
    if(i==4){
        i=0;
    }
}