// *********** Menu Dropdown ************ //
const menu = document.querySelector('.menu');
const dropdown = document.querySelector('ul');

menu.addEventListener('click', () => {
  if (dropdown.style.display !== "flex") {
    dropdown.style.display = "flex";
    hdlr.style.paddingBottom = "5px";
  } else {
    dropdown.style.display = "none";
    hdlr.style.paddingBottom = "20px";
  }
})

window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  if (screenWidth > 768) {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
  }
})
// ********** Menu Dropdown End *********** //


// ********** Menu Scroll ************ //
const aboutNav = document.getElementById('about-nav');
const portNav = document.getElementById('portfolio-nav');
const contactNav = document.getElementById('contact-nav');
const aboutSection = document.querySelector('.about-section');
const portfolioSection = document.querySelector('.portfolio-section');
const contactSection = document.querySelector('.contact-section');

function getPosition(el) {
  let yPos = 0;
  while (el) {
    if (el.tagName == "body") {
      let yScroll = el.scrollTop || document.documentElement.scrollTop;
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
    el = el.offsetParent;
  }
  return yPos;
}

let portPosition = getPosition(portfolioSection);
let contactPosition = getPosition(contactSection);


function updatePositions() {
  portPosition = getPosition(portfolioSection);
  contactPosition = getPosition(contactSection);
}

window.addEventListener("scroll", updatePositions, false);
window.addEventListener("resize", updatePositions, false);


// aboutNav.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// })
//
// portNav.addEventListener('click', () => {
//   window.scrollTo({
//     top: (portPosition - 70),
//     behavior: "smooth"
//   });
// })
//
// contactNav.addEventListener('click', () => {
//   window.scrollTo({
//     top: (contactPosition - 140),
//     behavior: "smooth"
//   });
// })

let a = [0, portPosition - 70, contactPosition - 140];

[aboutNav, portNav, contactNav].forEach((el, i) => {
  el.addEventListener('click', () => {
    window.scrollTo({
      top: a[i],
      behavior: "smooth"
    });
  })
});

// ********** End Menu Scroll *********** //


// ********** Copywrite Year *********** //
const theDate = new Date().getFullYear();
const footer = document.getElementById('copywrite');
const hdlr = document.querySelector('h1');
footer.innerHTML = `Hannah De Los Reyes &copy;${theDate}. All Rights Reserved`;
// **********  End Copywrite Year *********** //
