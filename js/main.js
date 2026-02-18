// ====== SETTINGS ======
const WHATSAPP_NUMBER_INTL = "971504544520"; // +971 50 454 4520
const WHATSAPP_MESSAGE = "Hello M.R SANITARY INST, I want to enquire about your services.";

// WhatsApp deep link:
// - wa.me works best on mobile; on desktop it opens WhatsApp Web.
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// ====== MOBILE MENU ======
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.textContent = isOpen ? "Close" : "Menu";
  });
}

mobileNav?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    mobileNav.classList.remove("show");
    menuBtn?.setAttribute("aria-expanded", "false");
    if (menuBtn) menuBtn.textContent = "Menu";
  }
});

// ====== SMOOTH SCROLL FOR BUTTONS ======
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-scroll]");
  if (!el) return;

  const target = el.getAttribute("data-scroll");
  const node = document.querySelector(target);
  if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
});

// ====== WHATSAPP HOOKS ======
function bindWhatsApp(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

[
  "waBtnTop",
  "waLinkTop",
  "waBtnServices",
  "waBtnAbout",
  "waBtnForm",
  "waBtnContact",
  "waLinkContact",
  "waFooter",
  "waBottom",
].forEach(bindWhatsApp);

// ====== DEMO FORM SUBMIT (NO BACKEND) ======
const form = document.getElementById("serviceForm");
const toast = document.getElementById("toast");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  toast.classList.add("show");
  form.reset();
  setTimeout(() => toast.classList.remove("show"), 3500);
});

// ====== FOOTER YEAR ======
document.getElementById("year").textContent = new Date().getFullYear();
