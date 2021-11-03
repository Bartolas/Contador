const btns=document.querySelectorAll('.btn');
const value=document.querySelector('#value');
let number=0;



btns.forEach(function(btn){
    btn.addEventListener('click',function(event){
        if(event.target.classList.contains('btn-decrease')){
            number--;
            value.textContent=number;
            if(number<0){
                value.style.color='red';
            }
            changeColor();
            
            
        }else if(event.target.classList.contains('btn-reset')){
            number=0;
            value.textContent=number;
            value.style.color="#000";

        }else{
            number++;
            value.textContent=number;
            if(number>0){
                value.style.color='green';
            }
            changeColor();
           
       
        }
    })
});

function changeColor(){
    if(number===0){
        value.style.color='#000';
    }
}


