const sections = document.querySelectorAll('section')
const reveals = document.querySelectorAll('.reveal')
const navBar = document.getElementById("main-navigation");
const aboutSection = document.getElementById("about-section")
const aboutHeading = document.getElementById("about-heading")
const skillsSection = document.getElementById("skills-section")
const skillsHeading = document.getElementById("skills-heading")
const skillsContainer = document.getElementById("skills-container")


let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navBar.style.top = "0";
    navBar.style.transition = ".5s";
  } else {
    navBar.style.top = "-80px";
    navBar.style.transition = ".5s";
  }
  prevScrollpos = currentScrollPos;
}

aboutSection.addEventListener("mouseover", ()=>{
  aboutHeading.classList.add("animate-rotate-y", "animate-once", "animate-duration-1000", "animate-delay-300", "animate-ease-linear")
}
)

skillsSection.addEventListener("mouseover", ()=>{
    skillsHeading.classList.add("animate-jump-in", "animate-once", "animate-duration-1000", "animate-ease-linear")
//   skillsHeading.classList.add("animate-rotate-y", "animate-once", "animate-duration-1000", "animate-delay-300", "animate-ease-linear")
  skillsContainer.classList.add("animate-fade", "animate-once", "animate-duration-1000", "animate-delay-500", "animate-ease-linear")
});
