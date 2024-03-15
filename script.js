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



// for (const card of cardContent) {
//     card.addEventListener("mouseover", (event)=>{
//         for (const desc of jobDescription) {
//             desc.classList.remove("hidden")
//             console.log(document.getElementById(event.target.id))
//         }        
//     })    
//     card.addEventListener("mouseout", ()=>{
//         for (const desc of jobDescription) {
//             desc.classList.add("hidden")
//         }     
//     })
// }

// for (const card of cardContent) {
// card.addEventListener("click", (event)=>{   
//     document.getElementById(event.target.id).children[0].classList.add("hidden")
// })
// // card.addEventListener("mouseout", (event)=>{
// //     document.getElementById(event.target.id).children[1].classList.add("hidden")
// // })
              
// }