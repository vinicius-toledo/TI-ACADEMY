
/*

 var/ let const

*/
/*var nome="Marcelo"; // var global
let sobreNome = "weihmayr"
if(true){
	console.log("var nome=" + nome);
	var mn= nome;
	console.log("Chamando o sobreNome"+ sobreNome);
	let sn= "Da Silva"
	console.log(sobreNome);
}

console.log("Meu nome é"+ mn + "" + sobreNome+""+sn);
console.log("var nome=" + mn);
*/


var Pessoa = {
		nome: "Vinicius" , 
		rua : "Rua lá" ,
		ncasa: "1013",
		dados: function(){
			document.write(
				"Nome...:"+this.nome+"<br>"+
				"Rua...:"+this.rua+"<br>"+
				"N. casa...:"+this.ncasa+"<br>") 
		}
}

 Pessoa.dados();
/*console.log("Nome"+ Pessoa.nome +

		" Endereço" + Pessoa.rua + "N."+ Pessoa.ncasa);*/



