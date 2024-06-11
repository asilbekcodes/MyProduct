document.getElementById('toggleModeButton').addEventListener('click', function() {
    const body = document.querySelector('#body');
    if (body.classList.contains('day-mode')) {
        body.classList.remove('day-mode');
        body.classList.add('night-mode');
    } else {
        body.classList.remove('night-mode');
        body.classList.add('day-mode');
    }
});


let button = document.getElementById('openButton')

let buttons = document.getElementById('openButtons')

let span = document.getElementById('close')

let modal = document.getElementById('items') 

button.onclick = function(){
    modal.style.display = 'block';
}

buttons.onclick = function(){
    modal.style.display = 'block';
}

span.onclick = function () {
    modal.style.display = 'none';
}




let btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    let a = document.getElementById('email').value;
    let border = document.getElementById('email')
    let b = document.getElementById('password').value;
    let border2 = document.getElementById('password')

    if (a === '') {
        border.style.borderColor = 'red'
    } else if (b === '') {
        border2.style.borderColor = 'red'
    }else{
        border.style.borderColor = 'green'
        border2.style.borderColor = 'green'
        window.location.href = 'pricing.html'
    }

})