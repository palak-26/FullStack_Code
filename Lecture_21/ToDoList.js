
let inp = document.querySelector('input')
let data = document.querySelector('ul')
let btn= document.querySelector('button')

    btn.addEventListener('click',()=>{
        let li = document.createElement('li')
        li.innerText = inp.value;
        data.appendChild(li)
        inp.value=" "
        li.addEventListener('click',()=>{
            // li.remove()
            li.style.textDecoration ="line-through";
        })
    })
