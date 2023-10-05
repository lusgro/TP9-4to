document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.getElementById("passwordInput");
  const passwordInput2 = document.getElementById("passwordInput2");
  const consignaLongitud = document.getElementById("helpPassword1");
  const consignaMayuscula = document.getElementById("helpPassword2");
  const consignaCaracterEspecial = document.getElementById("helpPassword3");
  const consignaIguales = document.getElementById("helpPassword4");
  const botonEnviar = document.getElementById("botonEnviar");

  passwordInput.addEventListener("input", verificarPassword);
  passwordInput2.addEventListener("input", verificarPassword);

  function verificarPassword() {
    const password = passwordInput.value;
    const password2 = passwordInput2.value;
    const cumplenRequisitos = verificarRequisitosPassword(password, password2, consignaLongitud, consignaMayuscula, consignaCaracterEspecial, consignaIguales);
    submitButton.disabled = !cumplenRequisitos;
  }

  function verificarRequisitosPassword(password, password2, consignaLongitud, consignaMayuscula, consignaCaracterEspecial, consignaIguales) {
    const longitudMínima = 8;
    const contieneMayúscula = /[A-Z]/.test(password);
    const contieneCaracterEspecial = /[!@#$%^&*_-]/.test(password);

    consignaLongitud.style.color = password.length < longitudMínima ? "red" : "green";
    consignaMayuscula.style.color = contieneMayúscula ? "green" : "red";
    consignaCaracterEspecial.style.color = contieneCaracterEspecial ? "green" : "red";
    consignaIguales.style.color = password == password2 ? "green" : "red";

    return password.length >= longitudMínima && contieneMayúscula && contieneCaracterEspecial && password === password2;
  }
});
