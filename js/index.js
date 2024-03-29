const topButton = document.getElementById("scrollbutton");

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

scrollbutton.addEventListener('click', topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}