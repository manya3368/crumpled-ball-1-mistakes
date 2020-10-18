class PaperBall{
    constructor(){
        var boptions={
            isStatic:false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2

        }
        this.ball = Bodies.circle(50,200,10,boptions);
        
        
        World.add(world, this.ball);
      }

      display(){
        var pos =this.ball.position;
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x,pos.y, this.ball.x, this.ball.y);
      }
    }
    
