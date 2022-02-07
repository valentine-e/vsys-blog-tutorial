const refs = {
  menuBtn: document.querySelector("[data-menu-button]"),
  menu: document.querySelector("[data-menu]"),
  backdrop: document.querySelector("[data-backdrop]"),
};

refs.menuBtn.addEventListener("click", menuToggle);

function menuToggle() {
  refs.menu.classList.toggle("is-open");
  refs.menuBtn.classList.toggle("menu-open");
  refs.backdrop.classList.toggle("is-hidden");
}
