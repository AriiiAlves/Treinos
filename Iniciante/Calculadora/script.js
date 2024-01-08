// max 8 dígitos

let total = 0, stored = 0, operation = 'None', show_total = false, firstoperation = true, dot = false;

function number(number){
    let visor_text = document.querySelector('#visor_text').textContent;

    if(dot ? visor_text.length < 9 : visor_text.length < 8 && visor_text != 'ERR' && visor_text != 'MAX' && visor_text != 'Division by 0!'){
        if (visor_text == '0' || show_total == true){
            document.getElementById("visor_text").innerHTML =  `${number}`;
            show_total = false;
        }
        else{
            document.getElementById("visor_text").innerHTML = `${visor_text}${number}`;
        }
    }
    else if(visor_text == 'ERR' || visor_text == 'MAX' || visor_text == 'Division by 0!'){
        document.getElementById("visor_text").innerHTML =  `${number}`;
        show_total = false;
    }
    else{
        document.getElementById("visor_text").innerHTML = "ERR";
    }
}

function insertDot(){
    let visor_text = document.querySelector('#visor_text').textContent;

    if(dot == false){
        document.getElementById("visor_text").innerHTML = `${visor_text}.`;
        dot = true;
    }
}

function clearAll(){
    total = 0;
    stored = 0;
    dot = false;
    operation = 'None';
    firstoperation = true;
    document.getElementById("visor_text").innerHTML = '0';

    console.log(" ");
}

function clearVisor(){
    document.getElementById("visor_text").innerHTML = '0';
}

function plus(){
    stored = Number(document.querySelector('#visor_text').textContent);
    calculate();
    operation = '+';
}

function minus(){
    stored = Number(document.querySelector('#visor_text').textContent);
    calculate();
    operation = '-';
}

function multiply(){
    stored = Number(document.querySelector('#visor_text').textContent);
    calculate();
    operation = '*';
}

function divide(){
    stored = Number(document.querySelector('#visor_text').textContent);
    calculate();
    operation = '/';
}

function equal(){
    stored = Number(document.querySelector('#visor_text').textContent);
    calculate();
}

function calculate(){
    if(stored == 'ERR' || stored == 'MAX' || stored == 'Division by 0!'){
        // Do nothing
    }
    else if(firstoperation == true){
        total += stored;
        firstoperation = false;
        show_total = true;
    }
    else{
        switch(operation){
            case '+':
                console.log(`${total} + ${stored} = ${total + stored}`)
                total += stored;
                check_size();
                break;
            case '-':
                console.log(`${total} - ${stored} = ${total - stored}`)
                total -= stored;
                check_size();
                break;
            case '*':
                console.log(`${total} * ${stored} = ${total * stored}`)
                total *= stored;
                check_size();
                break;
            case '/':
                if(stored == 0){
                    document.getElementById("visor_text").innerHTML = 'Division by 0!';

                    total = 0;
                    stored = 0;
                    dot = false;
                    operation = 'None';
                    firstoperation = true;
                }
                else{
                    console.log(`${total} / ${stored} = ${total / stored}`)
                    total /= stored;
                    check_size();
                }
                break;
            case 'None':
                break;
            }
        operation = 'None';
    }
}

function check_size(){
    if(String(total).length > 9){
        document.getElementById("visor_text").innerHTML = 'MAX';

        total = 0;
        stored = 0;
        dot = false;
        operation = 'None';
        firstoperation = true;
    }
    else{
        document.getElementById("visor_text").innerHTML = `${total}`;
        show_total = true;
    }
}