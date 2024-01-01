document.addEventListener("DOMContentLoaded", function () {
  const copyBtn = document.getElementById("copyBtn");
  const reloadBtn = document.getElementById("reloadBtn");
  const passwordLength = document.getElementById("passwordLength");
  const shouldContainNumbers = document.getElementById("shouldContainNumbers");
  const shouldContainSymbols = document.getElementById("shouldContainSymbols");
  const passwordGenerated = document.getElementById("password-generated");
  const notification = document.getElementById("notification");

  passwordLength.addEventListener("change", (e) => {
    generateRandomPassword();
  });

  shouldContainNumbers.addEventListener("change", (e) => {
    generateRandomPassword();
  });

  shouldContainSymbols.addEventListener("change", (e) => {
    generateRandomPassword();
  });

  reloadBtn.addEventListener("click", (e) => {
    generateRandomPassword();
  });

  copyBtn.addEventListener("click", (e) => {
    const textarea = document.createElement("textarea");
    textarea.value = passwordGenerated.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();

    notification.classList.remove("hide");
    notification.classList.add("show");

    setTimeout(() => {
      notification.classList.remove("show");
      notification.classList.add("hide");
    }, 5000);
  });

  const generateRandomPassword = () => {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (shouldContainNumbers.checked) charset += "0123456789";
    if (shouldContainSymbols.checked)
      charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let passwordString = "";
    for (let i = 0; i < passwordLength.value; i++) {
      passwordString += charset.charAt(
        Math.floor(Math.random() * charset.length)
      );
    }

    passwordGenerated.innerText = passwordString;
  };

  generateRandomPassword();
});
