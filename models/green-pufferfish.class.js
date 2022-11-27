class Pufferfish extends MoveableObject
{
   IMAGES_IDLE =

   [   'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
       'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
       'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
       'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
       'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
   ]

   currentImage = 0;

   constructor()
   {
      super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
      this.loadImages(this.IMAGES_IDLE);

      this.x = 200 + Math.random() * 500; // random zahl zwischen 200 und 700
      this.moveSpeed = 0.7 + Math.random() * 0.5;
      this.animate()
   }

   animate()
   {
       setInterval(() =>
       {
           let i = this.currentImage % this.IMAGES_IDLE.length; //let i = 0,1,2,3,4,5,6,0.... 
           let path = this.IMAGES_IDLE[i];
           this.img = this.imageCache[path];
           this.currentImage++;
       },100)  

       this.moveLeft()
   }
}