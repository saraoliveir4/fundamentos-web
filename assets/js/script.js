/*
var = variável de escopo global
let = variável de escopo local
const = variável de escopo global de valor constante

O JavaScript é uma linguagem Case Sensitive = reconhece letras maiúsculas e minúsculas
Linguagem orientada à funções

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()

# = id
. = class
*/

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let comentario = document.querySelector("#comentario");
let nomeOk = false;
let emailOk = false;
let comentarioOk = false;

nome.style.width = "100%";

/* Usando o evento onkeyup:

function validaNome() {
  if (nome.value.length < 3) {
    alert("nome inválido");
  }
}
*/

function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome Inválido";
    txtNome.style.color = "red";
    nomeOk = false; //Redefinindo para false se inválido
  } else {
    txtNome.innerHTML = "Nome Válido";
    txtNome.style.color = "green";
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail Inválido";
    txtEmail.style.color = "red";
    emailOk = false; //Redefinindo para false se inválido
  } else {
    txtEmail.innerHTML = "E-mail Válido";
    txtEmail.style.color = "green";
    emailOk = true;
  }
}

function validaComentario() {
  let txtComentario = document.querySelector("#txtComentario");
  if (comentario.value.length >= 100) {
    txtComentario.innerHTML = "Texto com mais de 100 caracteres!";
    txtComentario.style.color = "red";
    txtComentario.style.display = "block";
    comentarioOk = false; //Redefinindo para false se inválido
  } else {
    txtComentario.style.display = "none";
    comentarioOk = true;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && comentarioOk == true) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha o formulário corretamente!");
  }
}