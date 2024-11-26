const navbar = document.querySelector(".header_list");
const humburger = document.querySelector(".humburger");
const close = document.querySelector(".close_menu");

humburger.addEventListener("click", function () {
  navbar.classList.add("active");
});
close.addEventListener("click", function () {
  navbar.classList.remove("active");
});

// scrollbar header section
window.addEventListener("scroll", function () {
  const scrollHeader = document.querySelector(".header");

  if (window.scrollY > 50) {
    scrollHeader.classList.add("scrolled");
  } else {
    scrollHeader.classList.remove("scrolled");
  }
});
