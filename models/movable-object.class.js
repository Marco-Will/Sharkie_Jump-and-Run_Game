class MovaableObject
{
    x = 0;
    y = 200;
    img;
    height = 100;
    width = 100;


    loadImage(path)
    {
        this.img = new Image(); // this.img = documentGetElementById('image') <img id="image">
        this.img.src = path;
    }

    moveRight()
    {
        console.log('moving right')
    }
}