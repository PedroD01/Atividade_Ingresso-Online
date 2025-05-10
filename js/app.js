let quant_pista = parseInt(document.getElementById('qtd-pista').innerHTML);
let quant_superior = parseInt(document.getElementById('qtd-superior').innerHTML);
let quant_inferior = parseInt(document.getElementById('qtd-inferior').innerHTML);

function comprar() {
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade_ingresso = document.getElementById('qtd').value;
    if(quantidade_ingresso < 0){
      alert("Insira um número positivo");
    }
    else{
        if(ingresso == 'pista'){
      quant_pista = quant_pista - quantidade_ingresso; 
      if (quant_pista <= 0){
        alert("Esgotado!");
        quant_pista = 0;
      }
      document.getElementById('qtd-pista').innerHTML = `${quant_pista}`;
    }
    else if(ingresso == 'superior'){
      quant_superior = quant_superior - quantidade_ingresso;   
      if (quant_superior <= 0){
        alert("Esgotado!");
        quant_superior = 0;
      }
      document.getElementById('qtd-superior').innerHTML = `${quant_superior}`;
    }
    else{
     quant_inferior = quant_inferior - quantidade_ingresso;
     if (quant_inferior <= 0){
        alert("Esgotado!");
        quant_inferior = 0;
      }
      document.getElementById('qtd-inferior').innerHTML = `${quant_inferior}`;
    }    
    }
    
}
