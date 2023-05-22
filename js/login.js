
// não deixa o Javascript ficar varzeado, força a declaração das variaveis
"user strict";

// let usuario = "";
// let senha = "";

// const botaoSubmit = document.querySelector("#btnSubmit");

// botaoSubmit.addEventListener("click", ()=>{

//     const inputUser = document.querySelector("input[name='nmUser']");
//     const inputPass = document.querySelector("input[name='pass']");

//     const labelUser = document.querySelector("label[for='idUser']");
//     const labelPass = document.querySelector("label[for='idPass']");
    
//     if(inputUser.value.length > 3 && inputPass.value.length > 3){
//         // inputUser.setAttribute("style", "outline-color: #00ff00;")
//         // inputPass.setAttribute("style", "outline-color: #00ff00;")
        
//         labelUser.setAttribute("style", "color:#00ff00;");
//         labelPass.setAttribute("style", "color:#00ff00;");
//      }else{
//         labelUser.setAttribute("style", "color:#ff0000;");
//         labelPass.setAttribute("style", "color:#ff0000;");
//     }

// })

//LISTA DE USUÁRIOS NOVA
let listaDeUsuarios = [

    {
        nomeCompleto : "José das Couves",
        nomeUsuario : "jose",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Ruivão Lindão",
        nomeUsuario : "ruivo",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Filipino de Deus",
        nomeUsuario : "fili",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Pedro José",
        nomeUsuario : "pepe",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Ricardito Nelson",
        nomeUsuario : "rico",
        senhaUsuario : "123456"
    },
]




//Listener Global
addEventListener("click", (evt)=> {
    
    const inputUser = document.querySelector("input[name='nmUser']");
    const inputPass = document.querySelector("input[name='pass']");
        
    const labelUser = document.querySelector("label[for='idUser']");
    const labelPass = document.querySelector("label[for='idPass']");

    const msgStatus = document.querySelector("#msg");


    //Criando o OBJETO USUARIO-VALIDADO
    let usuarioValidado = {};

    //Recuperar o conte~udo dos campos e adicionar um OBJETO
    //CRIANDO O OBJETO USUARIO-LOGADO
    let usuarioLogado = {
        nomeUsuarioLogado : inputUser.value,
        senhaUsuarioLogado: inputPass.value
    }

    console.log(usuarioLogado.nomeUsuarioLogado);


    
    if (evt.target.id == "btnSubmit") {
        if(inputUser.value.length > 3 && inputPass.value.length > 3){
            // inputUser.setAttribute("style", "outline-color: #00ff00;")
            // inputPass.setAttribute("style", "outline-color: #00ff00;")
            
            labelUser.setAttribute("style", "color:#00ff00;");
            labelPass.setAttribute("style", "color:#00ff00;");

            //Se preencheu a qntd de caractéres necessária agora vamos validar o nomeUsuario e a senhaUsuario

            //Chamando a lista de usuários e iterando para criar a validação para cada usuário contido nela.
            listaDeUsuarios.forEach((usuario)=>{

                if (usuarioLogado.nomeUsuarioLogado == usuario.nomeUsuario && usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuario) {
                    usuarioValidado = usuario;
                }
                
            });
            

            if (usuarioValidado.nomeUsuario != undefined) {
                msgStatus.setAttribute("style","color:#00ff00");
                msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} realizou o login efetuado com Sucesso!</strong></span>`;

                //Redirect

                setTimeout(()=>{
                    window.location.href = "../sucesso.html"
                }, 3000);

            }else{
                msgStatus.setAttribute("style","color:#ff0000");
                msgStatus.innerHTML = "<span><strong>Login ou senha incorretos!</strong></span>"
            }
            
        }else{
            labelUser.setAttribute("style", "color:#ff0000;");
            labelPass.setAttribute("style", "color:#ff0000;");
        }
    }
})