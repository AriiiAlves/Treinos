function convertToBin(){
    let input = document.getElementById('inputDec');
    document.getElementById('inputBin').value = Number((input.value >> 0).toString(2));
};

function convertToDec(){
    let input = document.getElementById('inputBin');
    const regexBinario = /^[01]*$/; 

    // ^: Indica o início da string.
    // [01]: Esse conjunto representa um único caractere. Dentro dos colchetes, 0 ou 1 significa que a expressão regular aceita apenas esses dois caracteres.
    // *: Indica que o conjunto [01] pode aparecer zero ou mais vezes. Isso significa que a expressão regular pode validar uma sequência de 0s e 1s de qualquer comprimento.
    // $: Indica o final da string.

    while(input.value.startsWith(0)){ // Remove zeros no começo
        input.value = input.value.replace(0, '');
    }
    if(input.value.includes(0) == false && input.value.includes(1) == false){ // Coloca como 0 se não houver 0 ou 1
        input.value = 0;
    }
    if(!regexBinario.test(input.value)){ // Retira todos os números que não são 0 ou 1
        for(let i = 2; i < 10; i++){
            while(input.value.includes(i)){
                input.value = input.value.replace(i, '');
            }
        }
    }

    document.getElementById('inputDec').value = parseInt(input.value, 2);
    console.log(input.value + ' ' + parseInt(input.value, 2));
};