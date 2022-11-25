let open = document.getElementById('open-hamburger');
let close = document.getElementById('close-hamburger');
let menu = document.getElementById('mobile-menu');
let blur = document.getElementById('bg-blur');

close.style.display = "none";
close.style.fontSize = "1.9em";

open.addEventListener('click', () => {
    open.style.display = "none";
    close.style.display = "block";
    menu.style.transition = "top 0.6s";
    menu.style.top = "65px";
    blur.style.opacity = "1"
})

close.addEventListener('click', () => {
    close.style.display = "none";
    open.style.display = "block";
    menu.style.transition = "top 0.6s";
    menu.style.top = "-340px";
    blur.style.opacity = "0"
})

document.querySelectorAll('.mobile-link').forEach((link) => {
    link.addEventListener('click', () => {
        close.style.display = "none";
        open.style.display = "block";
        menu.style.transition = "top 0s";
        menu.style.top = "-340px";
        blur.style.opacity = "0"
    })
  })