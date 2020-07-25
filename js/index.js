
// Toggle button to hide and show the main navbar in mobile and tablet
let getButton = document.querySelector(".btn");
let element = document.querySelector(".main-navbar");
let temp = true;
getButton.addEventListener('click', function () {
  temp = !temp; //Toggling temp variable to == true to false OR false to true ;
  if (!temp) { //If temp variable is false
    element.style.display = "none" // If temp is False
  } else {
    element.style.display = "block" // If temp is true
  }
});