const answerInput = document.getElementById("answer");
const submitBtn = document.getElementById("submit");
const feedback = document.getElementById("feedback");

function normalize(str) {
  return str.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();
}

submitBtn.addEventListener("click", () => {
  const answer = normalize(answerInput.value);
  const correct = "sim";

  if (answer === correct) {
    feedback.textContent = "Correto! Indo para a próxima fase...";
    feedback.className = "feedback ok";

    setTimeout(() => {
      window.location.href = "base2.html";
    }, 1200);
  } else {
    feedback.textContent = "Errado! Tente novamente.";
    feedback.className = "feedback no";
  }
});
