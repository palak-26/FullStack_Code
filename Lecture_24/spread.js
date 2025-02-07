// let arr =[1,2,3,4,5,6]                   //spread operator which is used to concatenate two arrays//  
// let num = [...arr,7,8,9,10]
// console.log(num);


// function sum(a,b,...c){               // spread operator when used to take multiple parameters then it called rest operator
//     console.log(c);
    
// }

// sum(1,2,3,4,5,6,7,8,9,10)


let obj ={
    id: 1,
    name: 'Palak'
}

let {id,name}= obj                // id and name are the variables which should be same as that of the key name of the object
console.log(id,name);


let arr=[1,2,3,4,5]
let [a,b]=arr
console.log(a,b);
