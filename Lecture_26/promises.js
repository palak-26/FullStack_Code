// const promise = new Promise(function C(resolve, reject) {
//     console.log(1);
//     setTimeout(function D() {
//         console.log("timerStart");
//         resolve("success"); 
//         console.log("timerEnd");  
//     }, 0);
//     console.log(2);
// });

// promise.then(function f(res) {
//     console.log(res);
// });

// setTimeout(function E() {
//     console.log("Are!!");
// }, 0);

// console.log(4);





// console.log("Start");

// setTimeout(() => {
//     console.log("setTimeout");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise");
// });

// console.log("End");





// console.log("X");

// setTimeout(() => {
//     console.log("Y");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Z");
//     setTimeout(() => {
//         console.log("A");
//     }, 0);
// });

// console.log("B");






// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("C");
//     return Promise.resolve("D");
// }).then((res) => {
//     console.log(res);
// });

// console.log("E");





// console.log("1");

// const promise = new Promise((resolve) => {
//     console.log("2");
//     setTimeout(() => {
//         console.log("3");
//         resolve();
//     }, 0);
// });

// promise.then(() => {
//     console.log("4");
// });

// console.log("5");






// console.log("1");

// const promise = new Promise((resolve) => {
//     console.log("2");
//     setTimeout(() => {
//         console.log("3");
//         resolve();
//         for(let i=0;i<5;i++){
//             console.log('hellooo');
            
//         }
//     }, 0);
// });

// promise.then(() => {
//     console.log("4");
// });

// console.log("5");






console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
    return Promise.resolve("D");
}).then((res) => {
    console.log(res);
});

console.log("E");