let inp = document.querySelector('#disp')
let button = document.querySelectorAll('.button')

for(let btn of button){
    btn.addEventListener('click',()=>{
        let text = inp.innerText;
        if(text == 'AC'){
            inp.innerText = ''
        }
        else if(text == '='){
            inp.innerText= eval(inp.innerText)
        }
        else{
            inp.innerText+=text
        }
    })
}
