var slots = [0,0,0];
var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
var omena = new Image(100,100); omena.src ="img/apple.png";
var banaani = new Image(100,100); banaani.src ="img/banana.png";
var mansikka = new Image(100,100); mansikka.src ="img/strawb.png";
var imgObjects = [omena,banaani,mansikka];


function pelaa() {
  for (var i=0; i<slots.length; i++){
    var uusiLuku = Math.floor(Math.random() * 3);
    slots[i]= uusiLuku;
  }

  console.log(slots);
  console.log(imgObjects);
  ctx.drawImage(imgObjects[slots[0]],50,50);
  ctx.drawImage(imgObjects[slots[1]],200,50);
  ctx.drawImage(imgObjects[slots[2]],350,50);
}
