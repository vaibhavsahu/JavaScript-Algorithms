function Circle(radius){
    this.radius = radius;
    this.area = function(){
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(10);

//for in syntax
for(let key in circle){
    console.log(key, circle[key]);
}

//for of syntax
for(let key of Object.keys(circle)){
    console.log(key);
}

//for of syntax
for(let entry of Object.entries(circle)){
    console.log(entry);
}


console.log(circle.area());
