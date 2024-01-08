function On() {
    if (getComputedStyle(document.documentElement).getPropertyValue('--animation1') == 'none') {
        document.documentElement.style.setProperty('--animation1', 'lightsOn1 2s infinite');
        document.documentElement.style.setProperty('--animation2', 'lightsOn2 2s infinite');
    }
}

function Off() {
    if (getComputedStyle(document.documentElement).getPropertyValue('--animation1') != 'none') {
        document.documentElement.style.setProperty('--animation1', 'none');
        document.documentElement.style.setProperty('--animation2', 'none');
    }
}

function changeTime() {
    if (getComputedStyle(document.documentElement).getPropertyValue('--animation1') != 'none') {
        document.documentElement.style.setProperty('--animation1', `lightsOn1 ${document.getElementById('time_input').value}s infinite`);
        document.documentElement.style.setProperty('--animation2', `lightsOn2 ${document.getElementById('time_input').value}s infinite`);
    }
}

function changeColor(index) {
    let list = document.getElementById('color_picker');
    const colors = [
        'rgb(255, 99, 71)',
        'rgb(254, 139, 5)',
        'rgb(241, 162, 11)',
        'rgb(165, 182, 11)',
        'rgb(13, 184, 178)',
        'rgb(0, 114, 110)',
        'rgb(104, 17, 138)'
      ];      
    let lights = [
        document.getElementsByClassName('red'), 
        document.getElementsByClassName('orange'), 
        document.getElementsByClassName('yellow'), 
        document.getElementsByClassName('green'),
        document.getElementsByClassName('blue'),
        document.getElementsByClassName('darkblue'),
        document.getElementsByClassName('purple'),
    ]
    let colorIndex = colors.indexOf(window.getComputedStyle(list.getElementsByTagName('li')[index]).backgroundColor);
    
    console.log('Lista antes: ' + window.getComputedStyle(list.getElementsByTagName('li')[index]).backgroundColor);

    if (colors.indexOf(window.getComputedStyle(list.getElementsByTagName('li')[index]).backgroundColor) != 6) {
        for (let i = 0; i < lights[index].length; i++) {
            list.getElementsByTagName('li')[index].style.backgroundColor = `${colors[colorIndex + 1]}`;
            lights[index][i].style.backgroundColor = `${colors[colorIndex + 1]}`;
            lights[index][i].style.borderColor = `${colors[colorIndex + 1]}`;
            lights[index][i].style.boxShadow = `0 0 var(--lightIntensity) ${colors[colorIndex + 1]}`;

            console.log('Lista depois: ' + window.getComputedStyle(list.getElementsByTagName('li')[index]).backgroundColor);
            console.log('Luz depois: ' + window.getComputedStyle(lights[index][i]).backgroundColor);
        }
    }
    else {
        for (let i = 0; i < lights[index].length; i++) {
            list.getElementsByTagName('li')[index].style.backgroundColor = `${colors[0]}`;
            lights[index][i].style.backgroundColor = `${colors[0]}`;
            lights[index][i].style.borderColor = `${colors[0]}`;
            lights[index][i].style.boxShadow = `0 0 var(--lightIntensity) ${colors[0]}`;
        }
    }
}

// Não funciona adequadamente
// function changeSize(index) {
//     let el0 = document.getElementsByClassName('red');
//     let el1 = document.getElementsByClassName('orange');
//     let el2 = document.getElementsByClassName('yellow');
//     let el3 = document.getElementsByClassName('green');
//     let el4 = document.getElementsByClassName('blue');
//     let el5 = document.getElementsByClassName('darkblue');
//     let el6 = document.getElementsByClassName('purple');

//     let input0 = document.getElementById('size_input_0');
//     let input1 = document.getElementById('size_input_1');
//     let input2 = document.getElementById('size_input_2');
//     let input3 = document.getElementById('size_input_3');
//     let input4 = document.getElementById('size_input_4');
//     let input5 = document.getElementById('size_input_5');
//     let input6 = document.getElementById('size_input_6');

//     switch(index){
//         case 0:
//             for(let i = 0; i < el0.length; i++){
//                 el0[i].style.width = `${((input0.value * 5)/25) * 25}px`;
//                 el0[i].style.height = `${((input0.value * 5)/25) * 50}px`;
//             }
//             break;
//         case 1:
//             for(let i = 0; i < el0.length; i++){
//                 el1[i].style.width = `${((input1.value * 5)/25) * 25}px`;
//                 el1[i].style.height = `${((input1.value * 5)/25) * 50}px`;
//             }
//             break;
//         case 2:
//             for(let i = 0; i < el0.length; i++){
//                 el2[i].style.width = `${((input2.value * 5)/25) * 25}px`;
//                 el2[i].style.height = `${((input2.value * 5)/25) * 50}px`;
//             }
//             break;
//         case 3:
//             for(let i = 0; i < el0.length; i++){
//                 el3[i].style.width = `${((input3.value * 5)/25) * 25}px`;
//                 el3[i].style.height = `${((input3.value * 5)/25) * 50}px`;
//             }
//             break;
//         case 4:
//             for(let i = 0; i < el0.length; i++){
//                 el4[i].style.width = `${((input4.value * 5)/25) * 25}px`;
//                 el4[i].style.height = `${((input4.value * 5)/25) * 50}px`;
//             }
//             break;
//         case 5:
//             for(let i = 0; i < el0.length; i++){
//                 el5[i].style.width = `${((input5.value * 5)/25) * 25}px`;
//                 el5[i].style.height = `${((input5.value * 5)/25) * 50}px`;
//             }
//             break;
//         case 6:
//             for(let i = 0; i < el0.length; i++){
//                 el6[i].style.width = `${((input6.value * 5)/25) * 25}px`;
//                 el6[i].style.height = `${((input6.value * 5)/25) * 50}px`;
//             }
//             break;
//     }
// }

function changeIntensity(){
    document.documentElement.style.setProperty('--lightIntensity', `${(document.getElementById('intensity_input').value * 50) / 10}px ${(document.getElementById('intensity_input').value * 75) / 100}px`);
}

function changeLines(){
    let line2 = document.getElementById('line2');
    let line3 = document.getElementById('line3');
    let line4 = document.getElementById('line4');
    let line5 = document.getElementById('line5');

    let input = document.getElementById('rows_input').value;
    console.log(input);

    line2.style.display = 'none';
    line3.style.display = 'none';
    line4.style.display = 'none';
    line5.style.display = 'none';       

    switch(Number(input)){
        case 1:
            break;
        case 2:
            line2.style.display = 'flex';
            break;
        case 3:
            line2.style.display = 'flex';
            line3.style.display = 'flex';
            break;
        case 4:
            line2.style.display = 'flex';
            line3.style.display = 'flex';
            line4.style.display = 'flex';
            break;
        case 5:
            line2.style.display = 'flex';
            line3.style.display = 'flex';
            line4.style.display = 'flex';
            line5.style.display = 'flex';
            break;
    }
}