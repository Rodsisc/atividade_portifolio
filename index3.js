
const input_nome = document.getElementById("input_nome");
const input_email = document.getElementById("input_email");
const input_assunto = document.getElementById("input_assunto");
const input_mensagem = document.getElementById("input_mensagem");

function validar(){

  if(input_nome.value == ""){
    alert("Nome não informado")
    input_nome.focus();
  }
  else{
    if(input_email.value == ""){
        alert("Email não informado")
        input_email.focus();
      }
      else{
        if(input_assunto.value == ""){
            alert("Assunto não informado")
            input_assunto.focus();
          }
          else{
            if(input_mensagem.value == ""){
                alert("Digite a Mensagem")
                input_mensagem.focus();
              }
              else{
                alert("Mensagem enviada")
                input_nome.value = "";
                input_email.value = "";
                input_assunto.value = "";
                input_mensagem.value = "";
              }
          }
      }
      
  }
  



 }

