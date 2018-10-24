const arr1 = [1,2,3, {id: 1}];
const arr2 = [4,5,6];

console.log(arr1.concat(arr2).slice(2,5));
console.log([...arr1, ...arr2].slice(2,5));


for(let num of [...arr1, ...arr2])
    console.log(num);

[...arr1, ...arr2].forEach(element => {
    console.log(element);
});
