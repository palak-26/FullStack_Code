//CallBack function

// function CallBack(a){
//     console.log("hellooo");
//     setTimeout(()=>{
//         a()
//     })
    
// }

// CallBack(function outer(){
//     console.log("hii");
    
// })

// function step1(fn){
//     setTimeout(()=>{
//         console.log('select');
//         fn()
//     },5000)
// }

// function step2(fn){
//     setTimeout(()=>{
//         console.log('filter');
//         fn()
//     },2000)
// }

// function step3(fn){
//     setTimeout(()=>{
//         console.log('edit');
//         fn()
//     },4000)
// }

// function step4(){
//     setTimeout(()=>{
//         console.log('postt');
 
//     },3000)
// }


// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             step4()
//         })
//     })
// })


// let promise = new Promise((res , rej)=>{
//     let a=false
//     if(a){
//         res()
//     }
//     else{
//         rej()
//     }
// })

// console.log(promise);

let p = new Promise((res,rej)=>{
    rej()
})
p.then(()=>{
    console.log('Helloo');
    
}).catch(()=>{
    console.log('Hiii');
    
})