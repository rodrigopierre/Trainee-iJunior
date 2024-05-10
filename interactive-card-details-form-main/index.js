const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
let nome = 0, number = 0, month = 0, year = 0, cvc = 0;

function setErrorBlank(index){
    if (index == 2){
        campos[index].style.border = '2px solid red';
        const parent = document.getElementById('middle-l-requests-and-error');
        parent.querySelector('.error').innerText = 'Can\'t be blank';
    } else if (index == 3){
        campos[index].style.border = '2px solid red';
        const parent = document.getElementById('middle-l-requests-and-error');
        parent.querySelector('.error').innerText = 'Can\'t be blank';
    } else {
        campos[index].style.border = '2px solid red';
        const parent = campos[index].parentElement;
        parent.querySelector('.error').innerText = 'Can\'t be blank';
    }
}

function setErrorNumber(index){
    if (index == 2){
        campos[index].style.border = '2px solid red';
        const parent = document.getElementById('middle-l-requests-and-error');
        parent.querySelector('.error').innerText = 'Wrong format, numbers only';
    } else if (index == 3){
        campos[index].style.border = '2px solid red';
        const parent = document.getElementById('middle-l-requests-and-error');
        parent.querySelector('.error').innerText = 'Wrong format, numbers only';
    } else {
        campos[index].style.border = '2px solid red';
        const parent = campos[index].parentElement;
        parent.querySelector('.error').innerText = 'Wrong format, numbers only';
    }
}

function nameValidate() {
    if (campos[0].value === ''){
        setErrorBlank(0);
        nome = 1;
    }
}

function numberValidate() {
    if (campos[1].value === ''){
        setErrorBlank(1);
        number = 1;
    } else if (isNaN(campos[1].value.replace(' ','').replace(' ','').replace(' ','').replace(' ',''))){
        setErrorNumber(1);
        number = 1;
    }
}

function cvcValidate() {
    if (campos[4].value === ''){
        setErrorBlank(4);
        cvc = 1;
    } else if (isNaN(campos[4].value)){
        setErrorNumber(4);
        cvc = 1;
    }
}

function monthValidate() {
    if (campos[2].value === ''){
        setErrorBlank(2);
        month = 1;
    } else if (isNaN(campos[2].value)){
        setErrorNumber(2);
        month = 1;
    }
}

function yearValidate() {
    if (campos[3].value === ''){
        setErrorBlank(3);
        year = 1;
    } else if (isNaN(campos[3].value)){
        setErrorNumber(3);
        year = 1;
    }
}

function nameTranscript() {
    const namePerson = campos[0].value;
    document.getElementById('namePerson').innerText = namePerson;
}

function numberTranscript() {
    const numberCard = campos[1].value;
    document.getElementById('numberCard').innerText = numberCard;
}

function monthTranscript() {
    const monthCard = campos[2].value;
    document.getElementById('monthCard').innerText = monthCard;
}

function yearTranscript() {
    const yearCard = campos[3].value;
    document.getElementById('yearCard').innerText = yearCard;
}

function cvcTranscript() {
    const cvcCard = campos[4].value;
    document.getElementById('cvcCard').innerText = cvcCard;
}

function changeScreenBack() {
    const right = document.getElementById('right');
    const rightFinished = document.getElementById('right-finished');
    rightFinished.style.display = 'none';
    right.style.display = 'flex';
    document.getElementById('namePerson').innerText = 'Jane Appleseed';
    document.getElementById('numberCard').innerText = '0000 0000 0000 0000';
    document.getElementById('monthCard').innerText = '00';
    document.getElementById('yearCard').innerText = '00';
    document.getElementById('cvcCard').innerText = '000';
    campos[0].value = '';
    campos[1].value = '';
    campos[2].value = '';
    campos[3].value = '';
    campos[4].value = '';
}

function changeScreen() {
    nameValidate();
    numberValidate();
    monthValidate();
    yearValidate();
    cvcValidate();
    if (nome == 0 && number == 0 && month == 0 && year == 0 && cvc == 0){
        const right = document.getElementById('right');
    const rightFinished = document.getElementById('right-finished');
    right.style.display = 'none';
    rightFinished.style.display = 'flex';
    } else {
        nome = 0;
        number = 0;
        month = 0;
        year = 0;
        cvc = 0;
    }
}

function nameReturn() {
    campos[0].style.border = '1px solid #dadada';
    const parent = campos[0].parentElement;
    parent.querySelector('.error').innerText = '';
}

function numberReturn() {
    campos[1].style.border = '1px solid #dadada';
    const parent = campos[1].parentElement;
    parent.querySelector('.error').innerText = '';
}

function monthReturn() {
    campos[2].style.border = '1px solid #dadada';
    const parent = document.getElementById('middle-l-requests-and-error');
    parent.querySelector('.error').innerText = '';
}

function yearReturn() {
    campos[3].style.border = '1px solid #dadada';
    const parent = document.getElementById('middle-l-requests-and-error');
    parent.querySelector('.error').innerText = '';
}

function cvcReturn() {
    campos[4].style.border = '1px solid #dadada';
    const parent = campos[4].parentElement;
    parent.querySelector('.error').innerText = '';
}