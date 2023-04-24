// Recuperando o botão com o getElementbyId
// const botao = document.getElementById('btn-1');

// Recuperar um item específico com função querySelector(parâmetro)
// const selector = document.querySelector("li")
// console.log(selector.textContent)

// Recuperar uma lista de elementos com a função querySelectorAll
// const seletores = document.querySelectorAll('li');

// seletores.forEach((Item)=>{

//     if (Item.textContent == "Item-15") {
//         let meuItem = Item;
//         console.log(`Items selecionados : ${meuItem.textContent}`);
//         meuItem.textContent = "TÁ DOMINADO!!"
//     }  
// })
// console.log(seletores);

//Para estudar
//SetTimeOut
//SetInterval
//Random
//Math.Ceil
//Math.Random
//Math.Floor

let tmp = ""

function mudarCor() {
    
    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    const cabecalho = document.querySelector(".cabecalho");
    
    cabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;

    tmp = setTimeout(mudarCor, 1000);
}

mudarCor();