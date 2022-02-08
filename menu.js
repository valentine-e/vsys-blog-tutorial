const refs = {
  menuBtn: document.querySelector("[data-menu-button]"),
  menu: document.querySelector("[data-menu]"),
  menuList: document.querySelector("[data-menu-list]"),
  backdrop: document.querySelector("[data-backdrop]"),
};

refs.menuBtn.addEventListener("click", menuToggle);
refs.menuList.addEventListener("click", onMenuListClick);

function menuToggle() {
  refs.menu.classList.toggle("is-open");
  refs.menuBtn.classList.toggle("menu-open");
  refs.backdrop.classList.toggle("is-hidden");
  document.body.classList.toggle("overflow-hidden");
}

let currentMenuOpenTab;

function onMenuListClick(event) {
  if (event.target.nodeName !== "INPUT") return;

  if (event.target === currentMenuOpenTab) {
    currentMenuOpenTab.checked = false;
    currentMenuOpenTab = null;
    return;
  }

  currentMenuOpenTab = event.target;
}
