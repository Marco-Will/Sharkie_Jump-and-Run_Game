class MovaableObject
{
    x = 0;
    y = 200;
    img;
    height = 100;
    width = 100;
    imageCache = [];
    moveSpeed = 0.4;



    loadImages(arr)
    {
        arr.forEach((path) => 
        {
            let img = new Image();
            img.src = path;
            this.imageCache[path]= img;
        });
       
    }

    loadImage(path)
    {
        this.img = new Image(); // this.img = documentGetElementById('image') <img id="image">
        this.img.src = path;
    }

    moveRight()
    {
        console.log('moving right')
    }

    moveUp()
   {
      setInterval(() =>
      {
         this.y -= this.moveSpeed;

      },1000 / 60)
   }

   moveLeft()
   {
      setInterval(() =>
      {
         this.x -= this.moveSpeed;

      },1000 / 60)
   }

}