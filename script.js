let inputTxt = document.querySelector('.input-text');//vai pegar o que o input escrever
let traducaotxt = document.querySelector('.traducao');
let idioma = document.querySelector('.idioma');
//vai traduzir o que o usuario escrever
async function tradutor() {
    //o servidor para realizar a traducao
    let url = " https://api.mymemory.translated.net/get?q="
     + inputTxt.value 
    +"&langpair=pt|"
    + idioma.value

    let resposta = await fetch(url) //vai buscar a resposta do servidor
    let traducao = await resposta.json(); //vai pegar a traducao
    console.log(traducao);
  
    //vai exibir a traducao na tela
traducaotxt.textContent = traducao.responseData.translatedText

}


function voz(){

    //vai pegar a voz
   let voz = window.webkitSpeechRecognition

   //vai deixar o reconhecimento de voz pronto para uso
   let reconhecer = new voz()

   //configuração do idioma
   reconhecer. lang = 'pt-br'

   reconhecer.onresult = (evento) =>{
        
    let texto = evento.results[0][0].transcript
   
    inputTxt.textContent = texto

   tradutor()
   }


   reconhecer.start()

   

  

}