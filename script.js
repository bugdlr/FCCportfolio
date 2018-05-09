const theDate = new Date().getFullYear();
const footer = document.getElementById('copywrite');
footer.innerHTML = `Hannah De Los Reyes &copy;${theDate}. All Rights Reserved`;

const menu = document.querySelector('.menu');
const dropdown = document.querySelector('ul');

menu.addEventListener('click', () => {
  if (dropdown.style.display !== "block") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  };
})
