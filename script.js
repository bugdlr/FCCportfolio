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

// function getPosition(el) {
//   let yPos = 0;
//   while (el) {
//     if (el.tagName == "body") {
//       let yScroll = el.scrollTop || document.documentElement.scrollTop;
//       yPos += (el.offsetTop - yScroll + el.clientTop);
//     } else {
//       yPos += (el.offsetTop - el.scrollTop + el.clientTop);
//     }
//     el = el.offsetParent;
//   }
//   return yPos;
// }

function getOffset(el) {
  el = el.getBoundingClientRect();
  return el.top;
}

let portPosition = getOffset(portfolioSection);
let contactPosition = getOffset(contactSection);


function updateOffset() {
  portPosition = getOffset(portfolioSection);
  contactPosition = getOffset(contactSection);
}

window.addEventListener("scroll", updateOffset, false);
window.addEventListener("resize", updateOffset, false);

let a = [0, portPosition - 70, contactPosition - 140];
// variable values are not updating

[aboutNav, portNav, contactNav].forEach((el, i) => {
  el.addEventListener('click', () => {
    window.scrollTo({
      top: a[i],
      behavior: "smooth"
    });
  })
});

function aboutHighlight() {
  if (portPosition > 250) {
    aboutNav.style.backgroundColor = "white";
  } else {
    aboutNav.style.backgroundColor = "inherit";
  }
}

function portHighlight() {
  if (portPosition < 250 && contactPosition > 450) {
    portNav.style.backgroundColor = "white";
  } else {
    portNav.style.backgroundColor = "inherit";
  }
}

function contactHighlight() {
  if (contactPosition < 450) {
    contactNav.style.backgroundColor = "white";
  } else {
    contactNav.style.backgroundColor = "inherit";
  }
}


window.addEventListener("scroll", aboutHighlight, false);
window.addEventListener("scroll", portHighlight, false);
window.addEventListener("scroll", contactHighlight, false);


// ********** End Menu Scroll *********** //


// ********** Copywrite Year *********** //
const theDate = new Date().getFullYear();
const footer = document.getElementById('copywrite');
const hdlr = document.querySelector('h1');
footer.innerHTML = `Hannah De Los Reyes &copy;${theDate}. All Rights Reserved`;
// **********  End Copywrite Year *********** //
