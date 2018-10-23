function Circle(radius){
    this.radius = radius;
    this.area = function(){
        return Math.PI * this.radius * this.radius;
    }
}



//for in syntax
for(let key in circle){
    console.log(key, circle[key]);
}

//for of syntax
for(let key of Object.keys(circle)){
    console.log(key);
}

const circle = new Circle(10);
console.log(circle.area());
