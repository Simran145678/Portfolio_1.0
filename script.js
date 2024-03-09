const navBar = document.getElementById("main-navigation");
const cardContent = document.getElementsByClassName("card-content");
const jobDescription = document.getElementsByClassName("job-desc");

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

// cardContent.addEventListener("mouseover", (e) => {
//   jobDescription.classList.remove("hidden")
  
// })

// cardContent.addEventListener("mouseout", (e) => {
//     jobDescription.classList.add("hidden")
// })