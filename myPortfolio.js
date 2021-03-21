let form  = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.submit();
});

let form = document.getElementById('myForm');
let firstName = form.elements[0];
let lastName = form.elements[1];
let email = form.elements[2];
let firstName = firstName.value;
let lastName = lastName.value;
let email = email.value;

function error(input, message) {
    
    // show the error message
    const error = input.previousElementSibling;
    error.innerText = message;
    return false;
}



const error = input.previousElementSibling;
error.innerText = message;

function success(input) {
    
    // hide the error message
    const error = input.previousElementSibling;
    error.innerText = '';
    return true;
}



function requireValue(input, message) {
    return input.value.trim() === '' ?
        error(input, message) :
        success(input);
}

function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(input.value.trim()) ?
        success(input) :
        error(input, 'Invalid email format');
}

const form = document.getElementById('myForm');

// get name and email elements
const firstName = form.elements[0];
const lastName = form.elements[1]
const email = form.elements[2];


const requiredFields = [
    {input: firstName, message: 'first name is required'},
    {input: lastName, message:  'last name is required'},
    {input: email,message: 'Email is required'}
];

form.addEventListener('submit', (event) => {
    // check required fields
    let valid = true;
    requiredFields.forEach((input) => {
        valid = requireValue(input.input, input.message);
    });
    // validate email
    if (valid) {
        valid = validateEmail(email);
    }
    // stop submitting the form if the data is invalid
    if (!valid) {
        event.preventDefault();
    }
});form.addEventListener('submit', (event) => {
    // check required fields
    let valid = true;
    requiredFields.forEach((input) => {
        valid = requireValue(input.input, input.message);
    });
    // validate email
    if (valid) {
        valid = validateEmail(email);
    }
    // stop submitting the form if the data is invalid
    if (!valid) {
        event.preventDefault();
    }
});



