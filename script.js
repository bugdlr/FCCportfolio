const theDate = new Date().getFullYear();
const footer = document.getElementById('copywrite');
const hdlr = document.querySelector('h1');
footer.innerHTML = `Hannah De Los Reyes &copy;${theDate}. All Rights Reserved`;

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
