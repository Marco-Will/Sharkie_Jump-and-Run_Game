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
        
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0),
        
    ]
    
    canvas;
    ctx;
    keyboard;
    
    constructor(canvas, keyboard)
    {
        this.ctx = canvas.getContext('2d')
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        
    }

    draw()
    {
        //clearing the previouis canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.addObjectsToMap(this.backgroundObject);
        this.addObjectsToMap(this.bubbles);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);




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