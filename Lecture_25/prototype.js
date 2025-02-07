// let obj={
//     id:1,
//     name: "Palak"
// }

// console.log(obj.__proto__.__proto__);
// // console.log(obj.map());


let arr1=[1,2,3,4,5]

// // console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__);

// console.log(arr.map());

let data1= arr1.filter((a,b,c)=>{
    return a==1
})
console.log(data1);




Array.prototype.myMap=function (callback){                            //customized map function 
    let newArr =[] 
    for(let i =0; i<this.length;i++){
        newArr.push(callback(this[i],i,this))
    }
    return newArr

}

let arr=[1,2,3,4,5]
let data =arr.myMap((a,b,c)=>{
    return a*2
})
console.log(data);



Array.prototype.myMap1= function (callback){
    let newArr = []
    for(let i=0 ; i<this.length ; i++){
        if(callback(this[i],i,this)){
            newArr.push(this[i])
        }

    }   
    return newArr
}

let array = [1,2,3,4,5]
let data2 = array.myMap1((a,b,c)=>{
    return a<4
})
console.log(data2);
