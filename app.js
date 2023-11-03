//Questao 1 - Faça uma funcao que retorna true ou false para um panlindromo 


function panlindromo(str) {
    return true 
}


console.log(panlindromo('eye'))


//Questao 2 - Façã uma funcao que receba uma string contendo um CPF de acordo com a mascara 999.999.999-99.A funcao deve usar uma regex e deve retornar verdadeiro ou falso. 



function validaCPF(inputCPF){
    var soma = 0
    var restante;
    var inputCPF = document.querySelector('#cpf').value;

    if(inputCPF == '00000000000') return false;
    for (i = 1; i <= 9; i++) soma = soma + parseInt(inputCPF.substring(i-1, i)) * (11 - i)
    restante = (soma * 10) % 11;

    if((restante == 10) || (resto == 11)) resto = 0;
    if(restante != parseInt(inputCPF.substring(9, 10))) return false

    soma = 0;
    for(i = 0; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i-1, i))*(12-i);
    restante = (soma * 10) % 11;

    if((restante == 10) || (restante == 11)) restante = 0;
    if((restante != parseInt(inputCPF.substring(10, 11)))) return false;
    return true 
}



//Questao 4

//Descreva oque o seguinte comando faz: a ||=b

let comando = 'O comando verifica se A é verdadeiro ou undefined e se for, a variavel começa a valer B'



//Questao 3 = Oque é a classe self em Ruby 

//O self padrao serve para armazenar variaveis

/*
#Questao 7
Qual as vantagens e desvantagens do Ruby ser uma linguagem fortemente tipada.

Vantagens = ' - Diminui a verbosidade, nao precisa de conversoes'
            ' - É mais facil de ser usada e compreendida.'
            ' - '
Desvantagens => 'Tende a ser mais lenta'
                'Ja que a tipagem é forte pode ser confusa'
*/





