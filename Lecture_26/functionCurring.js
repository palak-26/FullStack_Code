// function a(){
//     console.log("helloo");
//     return function(){
//         console.log("hiii");
//         return function(){
//             console.log('byyee');
            
//         }
//     }
    
// }

// a()()()


// function sum(a){
//     return function(b){
//         return function(c){
//             console.log(a+b+c);
            
//         }
//     }
// }


// sum(1)(2)(3)




// function sum(a){
//     return function(b){
//         if(b)  return sum(a+b)

//           return a
//     }
// }


// //  console.log(sum(1)(2)(3)(4)(5)(6)(7)());
// let s =sum(1)(2)(3)(4)(5)(6)(7)()
// console.log(s);


let arr=[1,2,3,4,5,65,7]
let max=arr.reduce((max, current) => {
    (current > max ? current : max), arr[0]
})

console.log(max);

