'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let positivo = 0;
    let negativo = 0;
    let neutro = 0;
  
    for(let i = 0; i < arr.length; i++){
    
        if(arr[i] > 0)
        {
            positivo += 1/arr.length
        }
        else if(arr[i] < 0)
        {
            negativo += 1/arr.length;
        }
        else
        {
            neutro += 1/arr.length;
        }
    }
    console.log(positivo +'\n',negativo +'\n',neutro);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
