/*var nome = "Marcelo";

console.log(nome.length);
console.log(nome[0]);*/





/*match()
o metodo match procura uma palavra em uma string
Existem alguns parametros de pesquisa
que permite uma maior precisao
conforme a 
flags g / i / m
*/

var palavras = "maçã doce";

//console.log(palavras.match(/D/gi));





/*search()
O metodo search() procura pela ocorrencia 
e retorna a posiçao na cadeia da string,
a posiçao é em relaçao ao primeiro
caractere da ocorrencia*/


//console.log(palavras.search(/d/gi));

/*replace()
Este metodo subistitui uma string por outra,
simples assim, ele pesquisa a string informada
como no metodo "match" e a substitui por outra
string nas aspas informada comosegundo parametro
*/




/*var str ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequunturinventore, et labore cum, autem fugiat";

var mudarStr = str.replace(/e/gi,'Xxx');

console.log(mudarStr);*/

/*localeCompare()
Metodo localeCompare compara efetua a 
comparaçao entre duas string , se estas forem
iguais o retorno sera "0" ou o valor "-1" e 1
podem ser esperados caso elas nao sejam iguais.replace
*/


/*var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();

//console.log(`Este é o c1: ${c1}  Este é o c2: ${c2}`)


var comparacao = c1.localeCompare(/comp2/)
console.log(comparacao);
*/

/*trim()
Faz a remoçoa de espaços antes e depois 
da string especifica
*/

var p = '  fpalavra+ ';

var r =p.trim();
console.log(r);
var s = r.replace(/f/gi, '');
console.log(s);
sub_a = s.replace('+','');
console.log(`Removido: ${sub_a}`);

//console.log(p.replace(/f/gi ,''));
//console.log(p);

//toLocaleString
//formatação de moedas
var valor = 1.35 //1,35;
var formatarMoeda = valor.toLocaleString('pt-BR' , {
	style: 'currency' ,
	currency: 'BRL'
});

console.log(formatarMoeda);







