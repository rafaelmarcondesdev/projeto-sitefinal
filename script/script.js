function Enviar() {
    var pessoa = {
        nome: "",
        sobrenome: "",
        email: "",
        //aniversario: "",
        celular: "",
        outro: "",
        endereço: "",
        numero: "",
        cidade: "",
        estado: ""
    };


    pessoa.nome=document.getElementById("nome").value;
    pessoa.sobrenome=document.getElementById("sobrenome").value;
    pessoa.email=document.getElementById("email").value;
    //pessoa.aniversario=getElementById("dtnascimento").value;
    pessoa.celular=document.getElementById("celular").value;
    pessoa.outro=document.getElementById("outrocontato").value;
    var generoSelecionado = document.querySelector('input[name="sex"]:checked');
    pessoa.genero = generoSelecionado ? generoSelecionado.value : "Não informado";
    pessoa.endereço=document.getElementById("endereço").value;
    pessoa.numero=document.getElementById("numero").value;
    pessoa.cidade=document.getElementById("cidade").value;
    pessoa.estado=document.getElementById("estado").value;



    document.getElementById("nomeresp").innerHTML=pessoa.nome;
    document.getElementById("sobrenomeresp").innerHTML=pessoa.sobrenome;
    document.getElementById("emailresp").innerHTML=pessoa.email;
    //document.getElementById("dtnascimentoresp").innerHTML=pessoa.aniversario;
    document.getElementById("celularresp").innerHTML=pessoa.celular;
    document.getElementById("outroresp").innerHTML=pessoa.outro;
    document.getElementById("generoresp").innerHTML=pessoa.genero;
    document.getElementById("endereçoresp").innerHTML=pessoa.endereço;
    document.getElementById("numeroresp").innerHTML=pessoa.numero;
    document.getElementById("cidaderesp").innerHTML=pessoa.cidade;
    document.getElementById("estadoresp").innerHTML=pessoa.estado;
}