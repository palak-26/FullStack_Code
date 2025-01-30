// var a=5
// let a=4
// console.log(window.a);


// if('false')
// {
//     console.log("hello");
    
// }
// else{
//     console.log('hiii');
    
// }

// console.log(a);
// function sum(){
//     var a=5
//     console.log(a);
    
// }
// sum()
// console.log(a);

// function outer(){
//     let a=5
//     function inner(){
//        console.log(a);
        
//    }
//    inner()
// }
// outer()

let obj ={
    firstName: "angel",
    lastName: "Priya",
    fullName:function(city,age){
        console.log(this.firstName+" "+this.lastName +" "+city+" "+age);
        
    }
}
obj.fullName()

let user={
    firstName: "palak",
    lastName: "Neekhra"
}
// obj.fullName.call(user,'jbp')
obj.fullName.apply(user,['jbp',21])