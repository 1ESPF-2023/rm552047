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
//Math.Round

// let tmp = ""

// function mudarCor() {
    
//     let r = 0;
//     let g = 0;
//     let b = 0;

//     r = Math.round(Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);

//     const cabecalho = document.querySelector(".cabecalho");
    
//     cabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;

//     tmp = setTimeout(mudarCor, 1000);
// }

// mudarCor();

// function mudaBanner() {
//     const imgElement1 = document.querySelector(".banner-1 img");
//     // console.log(imgElement1);
//     let nr = Math.ceil(Math.random() *3);
//     // imgElement1.src = "./img/banner-lateral-"+nr+".png";
//     imgElement1.src = "./img/banner-lateral-${nr}.img"
//     setTimeout(mudaBanner2, 2000)
// }

// function mudaBanner2() {
//     const imgElement2 = document.querySelector(".banner-2 img");
//     // console.log(imgElement1);
//      nr = Math.ceil(Math.random() *3);
//     // imgElement2.src = "./img/banner-lateral-"+nr+".png";
//     imgElement2.src = "./img/banner-lateral-${nr}.img"
//     setTimeout(mudaBanner , 2000)
// }

// mudaBanner();

function mudaBanner() {
    const imgElement = document.querySelector(".banner-1 img");
    // console.log(imgElement1);
    let nr = Math.ceil(Math.random() *3);
    // imgElement1.src = "./img/banner-lateral-"+nr+".png";
    imgElement.src = `./img/banner-lateral-${nr}.img `
    
    const imgElement2 = document.querySelector(".banner-2 img");
    // console.log(imgElement1);
    nr = Math.ceil(Math.random() *3);
    // imgElement2.src = "./img/banner-lateral-"+nr+".png";
    imgElement2.src = `./img/banner-lateral-${nr}.img`

    setTimeout(mudaBanner , 2000)
}

mudaBanner();

const botao = document.querySelector("button");
// console.log(botao);
botoes.forEach( (botao)=>{
    botao
} );

botao.addEventListener("click", function(){
    if(this.textContent == "LIGAR"){
        const imgElement = document.querySelector("img[alt = 'Lâmpada apagada']")
        imgElement.src = "./img/pic_bulbon.gif";
        imgElement.alt = "Lâmpada acesa";
        this.textContent = "DESLIGAR"
    }else{
        const imgElement = document.querySelector("img[alt = 'Lâmpada acesa']")
        imgElement.src = "./img/pic_bulboff.gif";
        imgElement.alt = "Lâmpada apagada";
        this.textContent = "LIGAR"
    }
})
