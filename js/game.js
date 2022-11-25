let canvas;
let world;



function getId(id)
{
    return document.getElementById(id);
}

function init()
{
    canvas = getId('canvas');
    world = new World(canvas);
    


    console.log('my character is', world.character);
  


}