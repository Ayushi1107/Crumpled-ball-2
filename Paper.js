class Paper {
    constructor(x, y) {
    var options = {
        //'restitution':0.1,
            'friction':5.0,
            'density':1.2,
            'isStatic':false

    }
    this.body = Bodies.circle(x, y,20,options);
    
    this.image=loadImage("paper.png")
      
      World.add(world, this.body);
    }

 display(){
    var pos =this.body.position;
    //var angle=this.body.angle;
    push ();
    translate(pos.x,pos.y)
    //rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,60,60)
    pop();
  
 } 
};
 