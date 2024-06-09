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