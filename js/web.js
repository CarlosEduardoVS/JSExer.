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
    let classfotos = document.querySelectorAll(".img");

    for (let i = 0; i < classfotos.length; i++) {
        // classfotos[i].style.borderRadius = "30px";
        classfotos[i].src = "https://i.imgur.com/mFvYSE5.png";
    }
}


function nomesProdutos(){
    let nomes = document.querySelectorAll(".sc-d79c9c3f-0.nlmfp.sc-bfd00172-15.gwOrwq.nameCard");

    for (let i = 0; i < nomes.length; i++) {
        console.log(nomes[i].innerHTML)
    }
}


function valoresProdutos(){
    let soma = 0
    let valores = document.querySelectorAll(".sc-4a4c51d9-2.gAccCe.priceCard");

    valores.forEach(innerHTML => {
        console.log(innerHTML.textContent)
    })

    valores.forEach(innerHTML => {
    let text = innerHTML.textContent.replace(/R\$/, '')
                                             .replace('.', '')
                                             .replace(',','.')
                                             .trim();
    soma += parseFloat(text)
    });
    console.log("soma: " + soma.toFixed(2))
}