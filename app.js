const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li"); //Hämtar ALLA enskilda länkar i nav-links
  //Toggle nav

  burger.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active");
    //Animate links
    navLinks.forEach((link, index) => {
      //Index visar hur många links vi har.
      if (link.style.animation) {
        //Om links har animation sätt den till inget
        link.style.animation = "";
      } else {
        //Annars adda animation
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;  
      }
    });
    // Burger menu animation
    burger.classList.toggle("toggle");
  });
};
const app = () => {
  navSlide();
};
app();
