function Enviar() {
    var pessoa = {
        nome: "",
        email: "",
        //aniversario: "",
        celular: "",
        outro: ""
        

    };


    pessoa.nome=document.getElementById("nome").value;
    pessoa.email=document.getElementById("email").value;
    //pessoa.aniversario=getElementById("dtnascimento").value;
    pessoa.celular=document.getElementById("celular").value;
    pessoa.outro=document.getElementById("outrocontato").value;
    var generoSelecionado = document.querySelector('input[name="sex"]:checked');
    pessoa.genero = generoSelecionado ? generoSelecionado.value : "Não informado";




    document.getElementById("nomeresp").innerHTML=pessoa.nome;
    document.getElementById("emailresp").innerHTML=pessoa.email;
    //document.getElementById("dtnascimentoresp").innerHTML=pessoa.aniversario;
    document.getElementById("celularresp").innerHTML=pessoa.celular;
    document.getElementById("outroresp").innerHTML=pessoa.outro;
    document.getElementById("generoresp").innerHTML=pessoa.genero;


}