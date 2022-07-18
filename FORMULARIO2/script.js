

function validar(){
    var nome = formuser.nome.value;
    var sobrenome= formuser.sobrenome.value;
    var nascimento = formuser.nascimento.value;
    var sexo = formuser.sexo.value;
    var CPF = formuser.cpf.value;
    var telefone = formuser.telefone.value;
    var endereco = formuser.endereco.value;
    var estado = formuser.estado.value;
    var numerosos = formuser.numerosos.value;
    var enderecosos = formuser.enderecosos.value;

    if(nome == ""){
        alert("Digite seu nome!");
    }
    if(sobrenome == ""){
        alert("Digite seu sobrenome!");
    }
    if(nascimento == ""){
        alert("Digite sua data de nascimento!");
    }
    if(sexo == ""){
        alert("Coloque seu Genero!");
    }
    if(CPF == ""){
        alert("Coloque seu CPF!");
    }
    if(telefone == ""){
        alert("Coloque seu telefone!");
    }
    if(endereco == ""){
        alert("Coloque seu endereço!");
    }
    if(estado == ""){
        alert("Coloque o estado que mora!");
    }
    if(numerosos == ""){
        alert("Coloque o numero de emergencia!");
    }
    if(enderecosos == ""){
        alert("Coloque o endereço do contato de emergencia");
    }
   
    if(nome != ""||sobrenome != "" || nascimento !="" || sexo != "" || CPF != "" || telefone != "" || endereco != "" || estado != "" || numerosos != "" || enderecosos != ""){
        document.getElementById('confirmacao').innerHTML = "Formulario Preenchido com Sucesso!"
        document.getElementById('confirmacao').style.backgroundColor = 'green';
        

    }
}
