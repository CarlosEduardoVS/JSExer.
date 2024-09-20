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
    let classfotos = document.querySelectorAll("img");
// for simples para andar por todos os dados que foi pego pelo querySelectorALL("img")
    for (let i = 0; i < classfotos.length; i++) {
        // classfotos[i].style.borderRadius = "30px";
        classfotos[i].src = "https://i.imgur.com/mFvYSE5.png";
        classfotos[i].srcset = "https://i.imgur.com/mFvYSE5.png";
    }
}


function nomesProdutos(){
    let nomes = document.querySelectorAll(".sc-d79c9c3f-0.nlmfp.sc-bfd00172-15.gwOrwq.nameCard");
// for simples para andar por todos os dados que foi pego pelo querySelectorALL(".sc-d79c9c3f-0.nlmfp.sc-bfd00172-15.gwOrwq.nameCard.sc-d79c9c3f-0.nlmfp.sc-bfd00172-15.gwOrwq.nameCard")
    for (let i = 0; i < nomes.length; i++) {
        console.log(nomes[i].innerHTML)
    }
}


function valoresProdutos(){
    let soma = 0
    let valores = document.querySelectorAll(".sc-4a4c51d9-2.gAccCe.priceCard");
// usei como teste o forEach para fazer essa funcao poderia ter feito com somente um foreach mas estava testando algumas coisas e acabo ficando assim
// mostra todos os valores existente na pagina inicial
    valores.forEach(innerHTML => {
        console.log(innerHTML.textContent)
    })
// soma todos os valores e mostra no final depois de aparecer todos os produtos
    valores.forEach(innerHTML => {
    let text = innerHTML.textContent.replace(/R\$/, '')
                                    .replace('.', '')
                                    .replace(',','.')
                                    .trim();
    soma += parseFloat(text)
    });
    console.log("soma: " + soma.toFixed(2))
}