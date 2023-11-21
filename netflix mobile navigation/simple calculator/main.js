(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');

    buttons.forEach(function(button){
        button.addEventListener('click',function(a){
            let value = a.target.dataset.num;
            screen.value += value;
        });
    });

    equal.addEventListener('click',function(a){
        if(screen.value === " "){
            screen.value = "please enter";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click',function(a){
        screen.value = " ";
    })

})();