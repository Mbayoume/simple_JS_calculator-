let btns = document.querySelectorAll('.btn');
let screen = document.querySelector('#screen');
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');


for(let i =0; i <btns.length; i++){
    btns[i].addEventListener ('click', function (){
        let number_keyboard = btns[i].getAttribute('data-num');
        screen.value += number_keyboard

    })
};



equal.addEventListener('click' , function(){

    if(screen.value === ''){
        screen.value ===''

    }else{   let value = eval(screen.value);
        screen.value = value;

    }

})

clear.addEventListener('click', function(){
    screen.value =''

})