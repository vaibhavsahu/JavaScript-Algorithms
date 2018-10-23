function createCircle(radius) {
    return {
        radius,
        area(){
            return Math.PI * this.radius * this.radius;
        }
};
}

const circle = createCircle(10);
console.log(circle.area());
