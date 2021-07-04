class Particle{
     constructor(x, y){
         var options = {
             restitution: 1,
             friction: 0
         }
     this.body = Bodies.cirlce(x, y, this.r, options);
     this.color = color(random(0, 255), random(0, 255), random(0, 255));
     World.add(world, this.body);
     }
     display()
     {
        push();
        if(frameCount%60===0){
            particles.push(newParticle(random(width/2-10, width/2+10), 10, 10));
          }
         
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
     }
}