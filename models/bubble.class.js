class Bubble extends MovaableObject
{

   
   constructor()
   {
    
    super().loadImage('img/3. Background/BubbleSimple.png')

    this.x = 1
    this.y = 10 + Math.random() * 100; // random zahl zwischen 200 und 700
    this.height = 300
    this.width = 700

   }
}