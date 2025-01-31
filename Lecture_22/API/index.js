fetch('https://dummyjson.com/recipes').then((res)=>{
    return res.json()
}).then((data)=>{
    call(data.recipes)
})



let div = document.querySelector('div')

function call(data){
    console.log(data);
    for(let i of data){
        // let  = document.createElement('div')
        let h1= document.createElement('h1')
        let img = document.createElement('img')
        let p = document.createElement('p')

        h1.innerText= i.name
        img.setAttribute('src',i.image)
        // img.src=i.image
        img.style.height="200px" ;
        img.style.width="200px" ;
        p.innerText=i.cuisine
        div.append(h1,img,p)
    }
    
}