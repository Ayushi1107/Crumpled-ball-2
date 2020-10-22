class Dustbin {
    constructor(x, y, width, height) {
        var options ={
            isStatic:true
        }
      
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;

      this.image=loadImage("dustbingreen.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      //push ();
      //translate(pos.x,pos.y)
      //rotate (angle)
      imageMode(CENTER);
      fill("red");
      image(this.image,650, 565, 300, 250);
      //pop();
    }
  };