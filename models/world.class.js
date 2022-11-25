class World
{

    character = new Character();
    enemies = 
    [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        
    ]

    bubbles = 
    [
        new Bubble(),
       
        
    ]

    backgroundObject = 
    [
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png')
    ]
    
    canvas;
    ctx;

    constructor(canvas)
    {
        this.ctx = canvas.getContext('2d')
        this.canvas = canvas;

        this.draw();
        
    }

    draw()
    {
        //clearing the previouis canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.addToMap(this.character);

        this.addObjectsToMap(this.enemies);

        this.addObjectsToMap(this.bubbles);

        this.addObjectsToMap(this.backgroundObject);


        //draw() wird immer wieder aufgerufen
        self = this; //saving "this" in new variable cause "this" wont work inside requestAnimationFrame
        requestAnimationFrame(function() 
        {
            	self.draw();
        })
    }


    addObjectsToMap(objects)
    {
        objects.forEach(o => 
            {
                this.addToMap(o);
            });
    }

    addToMap(mo)
    {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height, );
    }


} 