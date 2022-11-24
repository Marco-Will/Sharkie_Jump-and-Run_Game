let canvas;
let character = new Image();
let ctx;


function getId(id)
{
    return document.getElementById(id);
}

function init()
{
    canvas = getId('canvas');
    ctx = canvas.getContext('2d')


    character.src = 'img/1.Sharkie/1.IDLE/1.png'

    setTimeout(function() 
    {
        ctx.drawImage(character, 20, 20, 50, 100)
    },2000)
  


}