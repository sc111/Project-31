class Particle{
   constructor(x,y,r){
      var options = {
        restitution:0.8,
        friction:0.1,
        density:0.1

      }
    this.body = Bodies.circle(x, y, this.r, options);
    this.color = color( random(0,225), random(0,225), random(0,225))
    World.add(world, this.body);
   }

   display(){


   }

}