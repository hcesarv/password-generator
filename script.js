let password = document.getElementById("password");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

function generatePassword() {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 7;
  let generatedPassword = '';

  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    generatedPassword += chars.substring(randomNumber, randomNumber+1);
  }
  password.value = generatedPassword;
}
generateBtn.addEventListener('click', generatePassword);

function copyPassword() {
  const copyPassword = document.getElementById("password");
  copyPassword.select();
  copyPassword.setSelectionRange(0, 999);
  document.execCommand("copy");
}
copyBtn.addEventListener('click', copyPassword);
