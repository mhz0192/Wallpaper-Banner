var image = document.querySelector(".image");

var images = new Array(
    "image/1.jpg",
    "image/2.jpg",
    "image/3.jpg"
);
var leng = images.length;
var i = 0;

function slider(){
    if(i > leng-1){
        i = 0;
    }
        image.src = images[i];
        i++;
        setTimeout('slider()', 2500);
    }
