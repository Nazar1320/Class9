var ball 
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,30,30)
  ball.shapeColor = "red"
  console.log(ball)
}

function draw() 
{
  background(30);
drawSprites()
}




