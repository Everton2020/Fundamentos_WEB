let email = window.document.querySelector('#email')
let assunto = window.document.querySelector('#assunto')

function validaEmail()
let txtEmail = document.querySelector("#txtEmail")
{
  if(email.value.indexOf('@') == -1 )
  {
    txtEmail.innerHTML = 'E-mail invalido'
    txtEmail.style.color = 'red'
  }
}