class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.radius = 300
		this.image=loadImage("images/tree.png")
        this.body = Bodies.circle(x,y,this.radius)
	}
	display()
	{
			var posBottom=this.body.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,0,this.radius*2,this.radius*2)
			pop()
			
	}

}