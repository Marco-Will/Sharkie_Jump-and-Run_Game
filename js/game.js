let canvas;
let world;
let keyboard = new Keyboard();



function getId(id)
{
    return document.getElementById(id);
}

function init()
{
    canvas = getId('canvas');
    world = new World(canvas, keyboard);
    


    console.log('my character is', world.character);

}


window.addEventListener("keypress", (event) => 
{
    if(event.keyCode == 119)
    {
        keyboard.UP = true;
    }
    
    if(event.keyCode == 97)
    {
        keyboard.LEFT = true;
    }

    if(event.keyCode == 100)
    {
        keyboard.RIGHT = true;
    }

    if(event.keyCode == 115)
    {
        keyboard.DOWN = true;
    }

    if(event.keyCode == 32)
    {
        keyboard.SPACE = true;
    }

    console.log(event);
}); 


window.addEventListener("keyup", (event) => 
{
    if(event.keyCode == 119)d
    {
        keyboard.UP = false;
    }
    
    if(event.keyCode == 97)
    {
        keyboard.LEFT = false;
    }

    if(event.keyCode == 100)
    {
        keyboard.RIGHT = false;
    }

    if(event.keyCode == 115)
    {
        keyboard.DOWN = false;
    }

    if(event.keyCode == 32)
    {
        keyboard.SPACE = false;
    }

});