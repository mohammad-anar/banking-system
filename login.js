// console.log('script connected');
// step 1  add eventlistener on button
// step 2  get input feild value that will be checked
// step 3 checked input value 
// step 4  if condition full fill go bank page

document.getElementById('submut-btn').addEventListener('click', () => {
    const email = document.getElementById('input-email').value;    
    const password = document.getElementById('input-password').value;

    if (email === 'anarul@gmail.com' && password === 'anarul00') {
        location = 'bank.html';
    }else{
        alert('Email or password not match');
    }

});