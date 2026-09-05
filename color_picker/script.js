const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click',function(x){
        console.log(x.target)
    if(x.target.id==='red'){
        body.style.background=x.target.id
    }
    if(x.target.id==='white'){
        body.style.background=x.target.id
    }
    if(x.target.id==='blue'){
        body.style.background=x.target.id
    }
    if(x.target.id==='pink'){
        body.style.background=x.target.id
    }
    if(x.target.id==='yellow'){
        body.style.background=x.target.id
    }
    if(x.target.id==='orange'){
        body.style.background=x.target.id
    }
    })
})