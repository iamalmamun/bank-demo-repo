// step:1
document.getElementById('btn-submit').addEventListener('click', function(){
    // step:2
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step:3
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    if(email === 'mamun8t@gmail.com' && password === 'secret'){
       window.location.href = 'bankshape.html';
    }
    else{
        alert('wrong password')
    }
})