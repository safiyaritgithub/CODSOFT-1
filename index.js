let toggle = document.querySelector(".toggle");

let menu = document.querySelector(".menu");

toggle.onclick = function () {
  menu.classList.toggle("active");
};

let toggles = document.querySelector(".toggles");

let lists = document.querySelector(".lists");

toggles.onclick = function () {
  lists.classList.toggle("active");
};
