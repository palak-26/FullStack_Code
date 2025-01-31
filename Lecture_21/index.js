// function fun1(){
//     console.log("Helloo");
    
// }


// let btn= document.querySelector("#one")
// btn.onclick= function(){
//     console.log("Byyeeeeee");
    
// }

// let btn1= document.querySelector("#two")
// let body = document.querySelector('body')
// let h1= document.querySelector('h1')

// btn1.addEventListener('click', ()=>{
//     // console.log("Helloo/Byeee");
//     body.style.backgroundColor="Crimson"
//     h1.innerText="Hellooo"
    
// })

// let inp = document.querySelector('input')
// let btn= document.querySelector('button')
// let h1= document.querySelector('h1')
// inp.addEventListener('input',(e)=>{
//     btn.addEventListener('click',()=>{
//         console.log(e.target.value);
//         h1.innerText=e.target.value;
//     })
// })

// let form= document.querySelector('form')

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     console.log(form[0].value);
//     console.log(form[1].value);
//     let data ={
//         FirstName: form[0].value,
//         LastName: form[1].value,
//         Email: form[2].value,
//         Password: form[3].value
//     }
//     localStorage.setItem('user',JSON.stringify(data))

// })

// let login= document.querySelector('#Login')

// login.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     let userData=localStorage.getItem('user')
//     let parseData =JSON.parse(userData);
//     if(login[0].value==parseData.Email && login[1].value==parseData.Password)
//     {
//         alert('Logged In Successfully!!!')
//     }
//     else{
//         alert('Enter correct credentials!!!')
//     }
   
    


// })


// btn.addEventListener('click',()=>{
//     h1.innerText=inp.val
// })


let inp = document.querySelector('input')
let data = document.querySelector('ul')
let btn= document.querySelector('button')

    btn.addEventListener('click',()=>{
        let li = document.createElement('li')
        li.innerText = inp.value;
        data.appendChild(li)
        inp.value=" "
        li.addEventListener('click',()=>{
            li.style.textDecoration ="line-through";
        })
    })
