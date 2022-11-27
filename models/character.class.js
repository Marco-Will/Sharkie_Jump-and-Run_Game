class Character extends MoveableObject
{
   IMAGES_IDLE =

[   'img/1.Sharkie/1.IDLE/1.png',
    'img/1.Sharkie/1.IDLE/2.png',
    'img/1.Sharkie/1.IDLE/3.png',
    'img/1.Sharkie/1.IDLE/4.png',
    'img/1.Sharkie/1.IDLE/5.png',
    'img/1.Sharkie/1.IDLE/6.png',
    'img/1.Sharkie/1.IDLE/7.png',
    'img/1.Sharkie/1.IDLE/8.png',
    'img/1.Sharkie/1.IDLE/9.png',
    'img/1.Sharkie/1.IDLE/10.png',
    'img/1.Sharkie/1.IDLE/11.png',
    'img/1.Sharkie/1.IDLE/12.png',
    'img/1.Sharkie/1.IDLE/13.png',
    'img/1.Sharkie/1.IDLE/14.png',
    'img/1.Sharkie/1.IDLE/15.png',
    'img/1.Sharkie/1.IDLE/16.png',
    'img/1.Sharkie/1.IDLE/17.png',
    'img/1.Sharkie/1.IDLE/18.png',
   
]

    world;
    moveSpeed = 4;


    currentImage = 0;

    constructor()
    {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.animate();
    }


    animate()
    {
        
       
        setInterval(() =>
        {
            if(this.world.keyboard.RIGHT)
            {
                this.x += this.moveSpeed;
                this.otherDirection = false;

            }

            if(this.world.keyboard.LEFT)
            {
                this.x -= this.moveSpeed;
                this.otherDirection = true;
            }

            if(this.world.keyboard.UP)
            {
                this.y -= this.moveSpeed;
            }
            
            if(this.world.keyboard.DOWN)
            {
                this.y += this.moveSpeed;
            }

            this.world.camera_x = -this.x;

        },1000/60) 

        setInterval(() =>
        {
            
           
            let i = this.currentImage % this.IMAGES_IDLE.length; //let i = 0,1,2,3,4,5,6,0.... 
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            
            
        },100)
            
    }  
    

    jump()
    {
        
    }
}