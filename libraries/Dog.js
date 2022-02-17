class Dog extends BaseClass {
    constructor(x,y){
      super(x,y);
      this.image = loadImage("sprites/dog1.png");
    }
  
    display() {
    
      super.display();
    }
  }