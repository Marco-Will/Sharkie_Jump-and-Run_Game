class BackgroundObject extends MovaableObject
{
    constructor(imagePath)
    {
        super().loadImage(imagePath);

        this.width = 720;
        this.height = 480;
        this.y = 1
       
    }
}