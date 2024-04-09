/* 
devo salvare il nome dall'input al localStorage
*/
const savedName = document.getElementById("nomeSalvato");
const saveBtn = document.getElementById("saveBtn");
const deleteBtn = document.getElementById("deleteBtn");
const nome = "name";

function saveName() {
  const name = document.getElementById("inputName").value;
  saveBtn.addEventListener("click", function () {
    localStorage.setItem("name", name);
    console.log("il seguente nome è stato salvato in localStorage:", name);
    savedName.innerText = name;
  });
}

function clearName() {
  localStorage.removeItem("name");
  document.getElementById("inputName").value = "";
}

saveBtn.addEventListener("click", saveName);
deleteBtn.addEventListener("click", clearName);

/* SECONDO ESERCIZIO */

document.addEventListener("DOMContentLoaded", timer);
function timer() {
  let count = sessionStorage.getItem("timerCount");
  setInterval(function () {
    count++;
    document.getElementById("timer").innerText =
      "sono passati " + count + " secondi";
    sessionStorage.setItem("timerCount", count);
  }, 1000);
}
