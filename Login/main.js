    function esconderTudo(){

        document.getElementById("inicio").classList.add("oculto");
        document.getElementById("login").classList.add("oculto");
        document.getElementById("cadastro").classList.add("oculto");
        document.getElementById("recuperar").classList.add("oculto");
        document.getElementById("usuario").classList.add("oculto");

    }

    function mostrarLogin(){

        esconderTudo();
        document.getElementById("login").classList.remove("oculto");

    }

    function mostrarCadastro(){

        esconderTudo();
        document.getElementById("cadastro").classList.remove("oculto");

    }

    function mostrarRecuperacao(){

        esconderTudo();
        document.getElementById("recuperar").classList.remove("oculto");

    }

    function voltar(){

        esconderTudo();
        document.getElementById("inicio").classList.remove("oculto");

    }

    function login(){

        let email=document.getElementById("loginEmail").value;
        let senha=document.getElementById("loginSenha").value;

        if(email=="" || senha==""){

            alert("Preencha o e-mail e a senha.");

            return;

        }

        esconderTudo();

        document.getElementById("usuario").classList.remove("oculto");

    }

    function logout(){

        esconderTudo();

        document.getElementById("inicio").classList.remove("oculto");

        alert("Logout realizado com sucesso.");

    }