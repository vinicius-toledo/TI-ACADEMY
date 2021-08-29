
//operacaos.js

window.onload=function(){

//produtos
(()=>{

	let mostrarProdutosCliente=document.querySelector("div#content-produtos > ul#produtos");

	for(let idx in produtos){
		mostrarProdutosCliente.innerHTML+=`<li class="itemProduto" data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc} - ${produtos[idx].precoRS}</li>`
	}

	})(produtos)


//compras
const itemProduto=document.querySelectorAll("ul#produtos > li");

const cestaDoCliente=document.querySelector("ul#cestaDoCliente");

const mostraTotalCompra=document.querySelector("input#mostraTotalCompra");


const armazenaItens=[];
var totalPedido=0;

	itemProduto.forEach((item)=>{
		item.addEventListener("click",()=>{
			li=document.createElement("li");
			li.setAttribute("data-preco",`${item.dataset.preco}`);
				if(armazenaItens.indexOf(item.textContent) == -1){
				armazenaItens.push(item.textContent);
				cestaDoCliente.appendChild(li).textContent=item.textContent;

				totalPedido+=Number(item.dataset.preco);
				mostraTotalCompra.value=totalPedido.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

				}else{
				alert(`Este item ${item.textContent} já está na sua cesta`);
				}

		}) 

	}) 	


var listaNaCestaDoCliente=document.querySelectorAll("#cestaDoCliente");

	listaNaCestaDoCliente.forEach((listaDeProdutos)=>{
			
		listaDeProdutos.addEventListener("click",(produto)=>{

				
			let indexProduto=armazenaItens.indexOf(produto.target.textContent);

				if (indexProduto > -1){
					if(confirm(`Tem certeza que você quer remover ${produto.textContent} de sua cesta?`)){
						armazenaItens.splice(indexProduto, 1); 
						totalPedido-=Number(produto.target.dataset.preco);
							if(totalPedido<=0){	
								totalPedido=0;
							}
						cestaDoCliente.removeChild(produto.target);
						mostraTotalCompra.value=totalPedido.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
					}
				}

					
			}) 

		}) 

}



// produtos.js


var produtos=[
	{prodDesc:"Mamão Papaia",prodPreco:4.70,precoRS:"R$ 4,70"},
	{prodDesc:"Laranja",prodPreco:3.70,precoRS:"R$ 3,70"},
	{prodDesc:"Manga",prodPreco:2.80,precoRS:"R$ 2,80"},
	{prodDesc:"Melão",prodPreco:6.90,precoRS:"R$ 6,90"},
	{prodDesc:"Morango",prodPreco:5.00,precoRS:"R$ 5,00"},
	{prodDesc:"Uva",prodPreco:2.50,precoRS:"R$ 2,50"},
	{prodDesc:"Romã",prodPreco:3.45,precoRS:"R$ 3,45"},
	{prodDesc:"Maçã",prodPreco:1.50,precoRS:"R$ 1,50"},
	{prodDesc:"Pera",prodPreco:1.80,precoRS:"R$ 1,80"},
	{prodDesc:"Carambola",prodPreco:1.20,precoRS:"R$ 1,20"},
	{prodDesc:"Limão",prodPreco:3.25,precoRS:"R$ 3,25"},
]
