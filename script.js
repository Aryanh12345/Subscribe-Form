const scriptURL = 'https://script.google.com/macros/s/AKfycbxUIGaIS5CpNK6fANEYQn4bX_mX6NNtxvfVydcY8kwn0sQPkTf03WF7P8bVgqFp-WIz9g/exec';

const form = document.forms['Email listing'];

let email = document.querySelector('input');
let msg = document.querySelector('#msg');

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: new FormData(form)
    })
    .then(() => {
        msg.innerHTML = "Thank You For Subscribing!";
        form.reset();
        setTimeout(() => {
            msg.innerHTML = "";
        },5000);
    })
    .catch(error => {
        console.error('Error!', error.message);
    });
});

