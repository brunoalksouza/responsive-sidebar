class NavBar {
  constructor(menu, navList, navLinks) {
    this.Menu = document.querySelector(menu);
    this.NavList = document.querySelector(navList);
    this.NavLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.Menu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.Menu) {
      this.addClickEvent();
    }
    return this;
  }
}
const MenuNavBar = new NavBar(".menu", ".nav-list", ".nav-link");
