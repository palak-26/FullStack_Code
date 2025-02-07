
let div = document.querySelector('div')
let apiKey = 'f291016019674a2cdcf0bb3d139e2801'
let city ="Jabalpur"
let t
let p= document.querySelector('p')
let h1 = document.querySelector('h1')

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
    // weather_details(data)
    p.innerText=data.main.temp
    h1.innerText=city
 
    div.appendChild(p,h1)
    
})

// function weather_details(val){
    
//     // console.log(val.name);
//     t = val.main.temp
//     console.log(t);
    
    
    
    
     
   
// }



// fetch('https://dummyjson.com/recipes').then((res)=>{
//     return res.json()
// }).then((data)=>{
//     call(data.recipes)
// })
