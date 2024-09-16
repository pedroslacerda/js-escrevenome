function setup() {
  createCanvas(600, 600);
  background("cyan");
}

function draw() {
  stroke("yellow");
  fill("red");
  
  if(mouseIsPressed){
     rect(mouseX, mouseY, 30, 45);
     }
}
