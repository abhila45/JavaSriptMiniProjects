const time=document.querySelector('.time-box')
setInterval(function(){
    let date= new Date()
    time.innerHTML=date.toLocaleTimeString()
},1000)