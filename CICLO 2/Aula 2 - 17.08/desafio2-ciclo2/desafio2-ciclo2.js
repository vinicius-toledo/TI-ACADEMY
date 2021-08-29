
var nome = prompt('Digite seu nome.');

var n = prompt('Olá ' + nome +' digite um número');

if (n ==(n)){
	console.log("é um número inteiro");
}
 else{
 	console.log("não é um numero inteiro");
 }

function alerta(){
	alert(' a string foi enviada')
	alert('a string será convertida para número')
}

alerta();



document.write('1. Seja bem vindo ' +nome+ '<br>');
document.write('2. Voce digitou o número ' +n+ '<br>');
document.write("O retorna da comparação booleana é..:"+ (n==n) + "<br/>");
document.write("A soma dos valores é..:" +(n+n)+ "<br/>");
document.write("A subtração dos valores..:"+ (n-n) +"<br/>");
document.write("O resto da divisão é..:"+ (n%n) +"<br/>");
document.write("O quadrado do número é..:"+ n*n);

var fruta = prompt('Escolha uma fruta da seguinte litsa:\n\nabacaxi\nmelão\nmorango');

var frut1='abacaxi';
var frut2='melão';
var frut3='morango';

if(fruta==frut1 || fruta == frut2 || fruta == frut3){
	console.log('OK');
}
else{
	alert("Olá "+nome+ ", a fruta que voce escolheu nao esta na lista")
	console.log("A fruta nao esta na lista")
}



