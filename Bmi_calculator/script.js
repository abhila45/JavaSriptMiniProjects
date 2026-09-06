
const form=document.querySelector('form')
form.addEventListener('submit',function(x){
     x.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result-space')
    if (height === '' || height <= 0 || isNaN(height)){
        result.innerHTML=`plz give valid height`
    }
    else if (weight === ''|| weight <=0 || isNaN(weight)){
        result.innerHTML= `plz give valid weight`
    }
    else{
        const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
         result.innerHTML=`<span>${bmi}</span>`
    }

   
})