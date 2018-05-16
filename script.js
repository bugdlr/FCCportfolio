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


// ********** Menu ************ //
const aboutNav = document.getElementById('about-nav');
const portNav = document.getElementById('portfolio-nav');
const contactNav = document.getElementById('contact-nav');
const aboutSection = document.querySelector('.about-section');
const portfolioSection = document.querySelector('.portfolio-section');
const contactSection = document.querySelector('.contact-section');


// Menu Scroll
aboutNav.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})

portNav.addEventListener('click', () => {
  portfolioSection.scrollIntoView({behavior: "smooth", block: "start"});
})

contactNav.addEventListener('click', () => {
  contactSection.scrollIntoView({behavior: "smooth", block: "start"});
})


// Menu Highlight
function getPosition(el) {
  el = el.getBoundingClientRect();
  return el.top;
}

let portPosition = getPosition(portfolioSection);
let contactPosition = getPosition(contactSection);


function updatePosition() {
  portPosition = getPosition(portfolioSection);
  contactPosition = getPosition(contactSection);
}

window.addEventListener("scroll", updatePosition, false);
window.addEventListener("resize", updatePosition, false);

function aboutHighlight() {
  if (portPosition > 250) {
    aboutNav.style.backgroundColor = "white";
  } else {
    aboutNav.style.backgroundColor = "inherit";
  }
}

function portHighlight() {
  if (portPosition < 250 && contactPosition > 700) {
    portNav.style.backgroundColor = "white";
  } else {
    portNav.style.backgroundColor = "inherit";
  }
}

function contactHighlight() {
  if (contactPosition < 700) {
    contactNav.style.backgroundColor = "white";
  } else {
    contactNav.style.backgroundColor = "inherit";
  }
}

window.addEventListener("scroll", aboutHighlight, false);
window.addEventListener("scroll", portHighlight, false);
window.addEventListener("scroll", contactHighlight, false);


// ********** End Menu *********** //

// ********** Copywrite Year *********** //
const theDate = new Date().getFullYear();
const footer = document.getElementById('copywrite');
const hdlr = document.querySelector('h1');
footer.innerHTML = `Hannah De Los Reyes &copy;${theDate}. All Rights Reserved`;
// **********  End Copywrite Year *********** //
