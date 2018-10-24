const person = {
    firstName: 'Vaibhav',
    lastName: 'Sahu',
    get fullName(){
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

person.fullName = 'John Smith';
console.log(person.fullName);
