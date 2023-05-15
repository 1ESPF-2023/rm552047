
"use strict";
console.log('botaoSubmit')
 let usuario = "";
 let senha = "";

 const botaoSubmit = document.querySelector("#btnSubmit");

 botaoSubmit.addEventListener("click", ()=>{

    const inputUser = document.querySelector("input[name='nmUser']");
    const inputPass = document.querySelector("input[name='pass']");

    const labelUser = document.querySelector("label[for='idUser']")
    const labelPass = document.querySelector("label[for='idPass']")


    if(inputUser.value.length > 3 && inputPass.value.length > 3){
        // inputUser.setAttribute("style", "outline-color:#00ff00;")
        // inputPass.setAttribute("style", "outline-color:#00ff00;")
        labelUser.setAttribute("style","color:#00ff00;")
        labelPass.setAttribute("style","color:#00ff00;")
    }

    
 });

