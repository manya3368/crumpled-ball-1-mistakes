class Ground
{
constructor(x,y,width,height){
    var goptions={
        isStatic:true
    }
        this.ground=Bodies.rectangle(x,y,width,height,goptions);
        this.width = width;
        this.height = height;
        
        World.add(world, this.ground);
      }

      display(){
        var pos =this.ground.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x,pos.y, this.width, this.height);
      }
}
