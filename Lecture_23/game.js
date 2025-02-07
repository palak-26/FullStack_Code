let canvas= document.querySelector('canvas')
let ctx = canvas.getContext('2d')
// let play= document.querySelector(".fa-regular fa-play")/
let pause = document.querySelector('button')
let play = document.querySelector('.play')

let cell=50
let snakeCells=[[0,0]]

let direction = 'right'
let gameOver = false
let random= generateRandomCell()
let score = 1
let pizza= 100




document.addEventListener('keydown',(e)=>{
    
    
    if(e.key=='ArrowUp')
    {
        direction='up'
    }
    else if (e.key=="ArrowDown")
    {
        direction='down'
    }
    else if(e.key =="ArrowLeft")
    {
        direction='left'
    }
    else{
        direction='right'
    }
})

// let id 
// function run(){
//      id = setInterval(() => {
//     createShape()
//     update()
// }, 150);
// }
// run()
let id = setInterval(() => {
    createShape()
    update()
}, 150);
// pause.addEventListener('click',()=>{
//     clearInterval(id)
//  })
 
//  play.addEventListener('click',()=>{
//      run()
//  })


function createShape(){
    if(gameOver){
        clearInterval(id)
        ctx.fillStyle='red'
        ctx.font='40px sans-serif'
        ctx.fillText("Game Over!!",250,250)
        return
    }
    ctx.clearRect(0,0,700,500)
    for(let i of snakeCells){
        ctx.fillStyle = 'gold'
        ctx.fillRect(i[0],i[1],cell , cell)
    }
    
   if(score%5==0){
    ctx.fillStyle="red"
    ctx.fillRect(random[0],random[1],pizza,pizza)
    score+=2
   }
   else{
    ctx.fillStyle="green"
    ctx.fillRect(random[0],random[1],cell , cell)   
   }
    
    ctx.fillStyle = "black"
    ctx.font=" 40px sans-serif"
    ctx.fillText(`${score}`,600,50)


}

function update(){
    let headX= snakeCells[snakeCells.length-1][0]
    let headY= snakeCells[snakeCells.length-1][1]

    let newX
    let newY
    
    if(direction==='up'){
        newX=headX
        newY=headY-cell
        if(newY<0){
            gameOver=true
        }
    
    }
    else if(direction==='down'){
        newX=headX
        newY=headY+cell
        if(newY==500){
            gameOver=true
        }
      
    }
    else if(direction==="left"){
        newX = headX-cell
        newY=headY
        if(newX<0){
            gameOver=true
        }
       
    }
    else{
        newX=headX+cell
        newY=headY
        if(newX==700){
            gameOver=true
        }
        
    }
    for(let i of snakeCells){
        if(newX==i[0] && newY==i[1]){
            gameOver=true
        }
    }
    
    // for(let i=5;i<1500;i=i+5){
    //     if(score==i){
    //        random()
    //         ctx.fillStyle='green'
    //         ctx.fillRect(random[0],random[1],cell,update)
    //     }
    // }
    if(newX==random[0] && newY==random[1]){
        random= generateRandomCell()
        score+=1

        if(score==1500){
            clearInterval(id)
            ctx.fillStyle="red"
            ctx.font="60px sans serif"
            ctx.fillText("Winner",250,250)
        }

    }
    else{
        snakeCells.shift()
    }

    
    snakeCells.push([newX,newY])
    
    

}

function generateRandomCell(){
    return[
        Math.round((Math.random()*(700-cell))/cell)*cell,
        Math.round((Math.random()*(500-cell))/cell)*cell
    ]
}


// console.log(generateRandomCell());

