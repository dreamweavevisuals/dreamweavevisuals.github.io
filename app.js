const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li')

    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.1}s`
        }
        });
        //Burger Animation
        burger.classList.toggle('toggle');

    });
}

navSlide();

//Hide Navigation on Scroll
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
  contentClick: 'close',
  Toolbar: {
    display: {
      left: [],
      middle: ["infobar"],
      right: ["thumbs", "close"],
    },
  },
});

const swiper = new Swiper('#swiper-1', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    lazyLoading: true,
    loop: true,
    keyboard:{
        enabled:true
    }
});