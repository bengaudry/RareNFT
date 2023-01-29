export {};

let navLinks = document.getElementsByClassName("tb-nav-link");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("mouseenter", function () {
    for (let x = 0; x <= navLinks.length; x++) {
      if (x !== i) {
        navLinks[x].classList.add('tb-transp-nav-link')
      }
    }
  });
  navLinks[i].addEventListener("mouseleave", function () {
    for (let x = 0; x <= navLinks.length; x++) {
      navLinks[x].classList.remove('tb-transp-nav-link')
    }
  })
}

window.onscroll = function() {
  console.log(document.documentElement.scrollTop)
  if (document.documentElement.scrollTop > 0) {
    document.querySelector('.top-bar')?.classList.add('scrolling-top-bar')
  } else {
    document.querySelector('.top-bar')?.classList.remove('scrolling-top-bar')
  }
};
