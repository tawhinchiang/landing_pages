const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const generatorForm = document.querySelector("[data-generator-form]");
const aiOutput = document.querySelector("[data-ai-output]");

const WHATSAPP_NUMBER = "5563992014547";
const DEFAULT_WHATSAPP_MESSAGE =
  "Ol\u00e1, Tawhin! Gostaria de pedir um or\u00e7amento para uma landing page.";

const buildWhatsappUrl = (message = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.setAttribute("href", buildWhatsappUrl());
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

const closeMenu = () => {
  document.body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Abrir menu");
};

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -80px", threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

generatorForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = generatorForm.querySelector("input");
  const button = generatorForm.querySelector("button");
  const businessName = input?.value.trim() || "seu projeto";

  button.disabled = true;
  button.textContent = "Gerando...";

  window.setTimeout(() => {
    if (aiOutput) {
      aiOutput.textContent = `Brief iniciado para ${businessName}. Abrindo conversa no WhatsApp.`;
    }

    button.textContent = "Abrindo WhatsApp...";
    generatorForm.classList.add("is-success");

    window.open(
      buildWhatsappUrl(
        `Ol\u00e1, Tawhin! Quero uma landing page para ${businessName}. Pode me passar um or\u00e7amento?`
      ),
      "_blank",
      "noopener"
    );

    window.setTimeout(() => {
      button.disabled = false;
      button.textContent = "Receber proposta";
      generatorForm.classList.remove("is-success");
    }, 2200);
  }, 700);
});
