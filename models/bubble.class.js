class Bubble extends MoveableObject
{

   
   
   constructor()
   {
    
    super().loadImage('img/3. Background/BubbleSimple.png')

    this.x = 1
    this.y = 0 + Math.random() * 100; // random zahl zwischen 200 und 700
    this.height = 300
    this.width =720

    this.animate();

   }

   animate()
   {
      this.moveUp()
   }

}