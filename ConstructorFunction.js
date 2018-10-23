function Circle(radius){
    this.radius = radius;
    this.area = function(){
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(10);
console.log(circle.area());
