//SCRIPT

window.onload = function(){

	const btnBuscaCep = document.querySelector("#btnBuscaCep");
	const caixaCep = document.querySelector(".caixaCep");

    const dadosCep = async function(cepUrl){

		var url = `https://viacep.com.br/ws/${cepUrl}/json/`;
		var consultaCep = await fetch(url);
		var dadosCep = await consultaCep.json();


		for(var campos in dadosCep){

			console.log(campos);
			if(document.querySelector("#"+campos)){
				document.querySelector("#"+campos).value = dadosCep[campos];
			}
			
		}
    }

	btnBuscaCep.addEventListener('click', ()=>{
		let cep = caixaCep.value;
		dadosCep(cep);



		
	})
	
}

