let quant_pista = parseInt(document.getElementById('qtd-pista').innerHTML);
let quant_superior = parseInt(document.getElementById('qtd-superior').innerHTML);
let quant_inferior = parseInt(document.getElementById('qtd-inferior').innerHTML);

function comprar() {
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade_ingresso = document.getElementById('qtd').value;
    
    if(ingresso == 'pista'){
      quant_pista = quant_pista - quantidade_ingresso;
      console.log(quant_pista);
    }
    else if(ingresso == 'superior'){
      quant_superior = quant_superior - quantidade_ingresso;
      console.log(quant_superior);
    }
    else{
     quant_inferior = quant_inferior - quantidade_ingresso;
     console.log(quant_inferior);
    }
    
}
