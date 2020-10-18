class  Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.side = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.side);
      }

      display(){
        var pos =this.side.position;
        var angle=this.side.angle;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y, this.width, this.height);
      }
    }
    
