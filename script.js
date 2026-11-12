const CONFIG = {
  mbwayNumber: "987 654 321",
  holderName: "Verónica Almada"
};

const numberEl = document.getElementById("mbway-number");
const holderEl = document.getElementById("mbway-holder");
const amountEl = document.getElementById("chosen-amount");
const feedbackEl = document.getElementById("copy-feedback");
const copyBtn = document.getElementById("copy-btn");

numberEl.textContent = CONFIG.mbwayNumber;
holderEl.textContent = CONFIG.holderName;

// Amount selection
document.querySelectorAll(".amount").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".amount").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    amountEl.textContent = btn.dataset.amount + " €";
  });
});

// Copy number to clipboard
copyBtn.addEventListener("click", async () => {
  const digits = CONFIG.mbwayNumber.replace(/\s+/g, "");
  try {
    await navigator.clipboard.writeText(digits);
    feedbackEl.textContent = "Número copiado! Obrigado pela tua ajuda 💚";
  } catch (err) {
    feedbackEl.textContent = "Não foi possível copiar. Copia manualmente: " + digits;
  }
  setTimeout(() => (feedbackEl.textContent = ""), 4000);
});
