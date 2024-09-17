const button = document.getElementById("btn");

button.onclick = () => {
    const nme = document.querySelector('#nme').value;
    const email = document.querySelector('#em').value;
    const message = document.querySelector('#msg').value;

    if (nme !== "" && email !== "" && message !== "" && email) {
        alert('Your response has been recorded');
    } else {
        alert('Fill all the blanks');
    }
};
