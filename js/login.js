
// "use strict";

// let usuario = "";
// let senha = "";

// const botaoSubmit = document.querySelector("#btnSubmit");

// botaoSubmit.addEventListener("click",()=>{
//     const inputUser = document.querySelector("input[name='nmUser']");
//     const inputPass = document.querySelector("input[name='pass']");
            
//     const labelUser = document.querySelector("label[for='idUser']");
//     const labelPass = document.querySelector("label[for='idPass']");

//     if(inputUser.value.length > 3 && inputPass.value.length > 3){
//         // inputUser.setAttribute("style", "outline-color:#00ff00;")
//         // inputPass.setAttribute("style", "outline-color:#00ff00;")

//         labelUser.setAttribute("style", "color:#00ff00;");
//         labelPass.setAttribute("style", "color:#00ff00;");
        
//     }else{
//         // inputUser.setAttribute("style", "outline-color:##ff0000;")
//         // inputPass.setAttribute("style", "outline-color:##ff0000;")

//         labelUser.setAttribute("style", "color:#ff0000;");
//         labelPass.setAttribute("style", "color:#ff0000;");
//     }
// }    
    
    //Listener Global
addEventListener("click", (evt)=> {

    const inputUser = document.querySelector("input[name='nmUser']");
    const inputPass = document.querySelector("input[name='pass']");
            
    const labelUser = document.querySelector("label[for='idUser']");
    const labelPass = document.querySelector("label[for='idPass']");

        //Recupeerar o conteúdo dos campos e adicionar em um OBJETO
    const usuarioLogado = {
        nomeUsuárioLogado : inputUser.value,
        senhaUsuárioLogado : inputPass.value,
    }    
    if(evt.target.id == "btnSubmit") {
    
        if(inputUser.value.length > 3 && inputPass.value.length > 3){
            // inputUser.setAttribute("style", "outline-color:#00ff00;")
            // inputPass.setAttribute("style", "outline-color:#00ff00;")

            labelUser.setAttribute("style", "color:#00ff00;");
            labelPass.setAttribute("style", "color:#00ff00;");

            if(usuarioLogado.nomeUsuárioLogado == "tutu" && usuarioLogado.senhaUsuárioLogado == "123456"){
               alert("VALIDADO!");
            }else{
               alert("NÃO VALIDADO!");
            }
            
        }else{
            // inputUser.setAttribute("style", "outline-color:##ff0000;")
            // inputPass.setAttribute("style", "outline-color:##ff0000;")

            labelUser.setAttribute("style", "color:#ff0000;");
            labelPass.setAttribute("style", "color:#ff0000;");
        }
        
    }

})