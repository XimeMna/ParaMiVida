document.querySelectorAll('.password-input').forEach((input, index, inputs) => {
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value.length === 1) {
            // Move to the next input if available
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        } else if (value.length === 0 && index > 0) {
            // Move to the previous input if empty and not the first input
            inputs[index - 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && e.target.value.length === 0 && index > 0) {
            // Move to the previous input on backspace if empty
            inputs[index - 1].focus();
        }
    });
});


document.getElementById('submitBtn').addEventListener('click', () => {
    const inputs = Array.from(document.querySelectorAll('.password-input'));
    const values = inputs.map(input => input.value).join('');
    var fondo = document.getElementById("fondo_");
    var error = document.getElementById("error");
    
    const correctPassword = '1505'; 

    if (values === correctPassword) {
        fondo.style.animation = "2.5s cubic-bezier(.40, 1, .30, 1) circle-in-center both";
        fondo.style.display = "block";
        inputs.forEach(input => input.value = "");
        setTimeout(function() {
            window.location.href = "inicio.html";
        }, 2500);
    } else {
        inputs.forEach(input => input.value = "");
        error.classList.remove("error-flash");
        error.classList.add("error-flash"); 
        setTimeout(function() {
            error.classList.remove("error-flash");
        }, 500);
    }
});

