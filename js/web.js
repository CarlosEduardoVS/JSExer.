// function algumaCoisa(){
//     let numero = prompt(
//         "pensa1\n"  +
//         "pensa2\n" +
//         "pensa3\n" +
//         "pensa4" 
//     )
//     switch (numero) {
//         case "1":
//             console.log("O número é 1");
//             break;
//         case "2":
//             console.log("O número é 2");
//             break;
//         case "3":
//             console.log("O número é 3");
//             break;
//         case "4":
//             console.log("O número é 4");
//             break;
//         default:
//             console.log("Número não reconhecido");
//             break;
//     } 
// }

function mudarfotosProdutos() {
    let classfotos = document.querySelectorAll(".jss87");
    // classfotos.forEach(src =>{
    //     src.textContent = "https://i.imgur.com/mFvYSE5.png"
    // })
    for (let i = 0; i < classfotos.length; i++) {
        classfotos[i].src = "https://i.imgur.com/mFvYSE5.png";
    }
}


function nomesProdutos(){
    let nomes = document.querySelectorAll(".MuiTypography-root.jss102.jss103.MuiTypography-h6");

    nomes.forEach(innerHTML =>{
        console.log(innerHTML.textContent)
    })

    // for (let i = 0; i < nomes.length; i++) {
    //     console.log(nomes[i].innerHTML)
    // }
}


function valoresProdutos(){
    let soma = 0
    let valores = document.querySelectorAll(".jss133");

    valores.forEach(innerHTML => {
        console.log(innerHTML.textContent)
    })

    valores.forEach(innerHTML => {
    let text = innerHTML.textContent.replace(/R\$/g, '')
                                    .replace(/\./g, '')
                                    .replace(',','.')
                                    .trim();
    soma += parseFloat(text)
    });
    // valores.forEach(innerHTML => {
    //     // Substitui &nbsp; por um espaço normal
    //     soma += parseFloat(innerHTML)
    // });
    // for (let i = 0; i < valores.length; i++) {
    //     // console.log(valores[i].innerHTML)
    //     // let jorge = parseFloat(valores[i].innerHTML)
    //     soma += parseFloat(valores[i].innerHTML)
    // }
    console.log("soma: " + soma.toFixed(2))
}