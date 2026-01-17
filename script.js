let inputTxt = document.querySelector('.input-text');//vai pegar o que o input escrever

//vai traduzir o que o usuario escrever
async function tradutor() {
    //o servidor para realizar a traducao
    let url = " https://api.mymemory.translated.net/get?q="
     + inputTxt.value 
    +"&langpair=pt|en";

    let resposta = await fetch(url) //vai buscar a resposta do servidor
    let traducao = await resposta.json(); //vai pegar a traducao
    console.log(traducao);
  
    //vai exibir a traducao na tela
document.querySelector('.traducao').innerHTML=traducao.responseData.translatedText 

}