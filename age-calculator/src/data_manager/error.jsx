import React from 'react'

export function Error(day, month, year) {
    var returnerror=false; 

    // erro de valor não existente
    if (day > 31 || day <= 0) {                                 
        document.getElementById('DAY').style.color = 'red';
        document.getElementById('DD').style.border = '1px solid red';
        document.getElementById('dia').innerText = 'Must be a valid day';
        returnerror=true;
    }
    if (month > 12 || month <= 0) {
        document.getElementById('MONTH').style.color = 'red';
        document.getElementById('MM').style.border = '1px solid red';
        document.getElementById('mes').innerText = 'Must be a valid month';
        returnerror=true;
    }
    if (year > 2024 || year < 100) {
        document.getElementById('YEAR').style.color = 'red';
        document.getElementById('YYYY').style.border = '1px solid red';
        document.getElementById('ano').innerText = 'Must be a valid year';
        returnerror=true;
    }

    // erro de de meses especificos
    if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (day == 31) {
            document.getElementById('DAY').style.color = 'red';
            document.getElementById('DD').style.border = '1px solid red';
            document.getElementById('dia').innerText = 'Must be a valid day';
            returnerror=true; 
        }
    } else if (month == 2 && day > 29) {
        document.getElementById('DAY').style.color = 'red';
        document.getElementById('DD').style.border = '1px solid red';
        document.getElementById('dia').innerText = 'Must be a valid day'; 
        returnerror=true;
    }

    // erro de input vazio
    if (day == '') {                                 
        document.getElementById('DAY').style.color = 'red';
        document.getElementById('DD').style.border = '1px solid red';
        document.getElementById('dia').innerText = 'This field is required';
        returnerror=true;
    }
    if (month == '') {
        document.getElementById('MONTH').style.color = 'red';
        document.getElementById('MM').style.border = '1px solid red';
        document.getElementById('mes').innerText = 'This field is required';
        returnerror=true;
    }
    if (year == '') {
        document.getElementById('YEAR').style.color = 'red';
        document.getElementById('YYYY').style.border = '1px solid red';
        document.getElementById('ano').innerText = 'This field is required';
        returnerror=true;
    }

    return returnerror;
}