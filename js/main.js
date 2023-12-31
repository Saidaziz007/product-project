$(document).ready(function(){
  $("#contents__carousel").owlCarousel({
    items: 1,
    margin: 30,
    loop: true,
    nav: true,
    dots: true,
    navText: ['<i class="fa-solid fa-chevron-left fa-fade"></i>', '<i class="fa-solid fa-chevron-right fa-fade"></i>'],
    autoplay: true,
    gap: 20,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    }
  });
});


window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "images/light.svg";
  } else {
    this.firstElementChild.src = "images/dark.svg";
  }
  document.body.classList.toggle("dark");
});


function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);


window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}


const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add('loading-none');
}, loadingDuration);