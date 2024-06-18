// A script to alternate between the photo being shown and it not being shown. simple.

let button = document.getElementById("button")
let buttonText = document.getElementById("button-text")
let photo = document.getElementById("family-image")
let active = false

button.onclick = function() {
  if (!active) {
    photo.style.display = "block"
    buttonText.innerHTML = "Hide image"
    active = true
  } else {
    photo.style.display = "none"
    buttonText.innerHTML = "Show image"
    active = false
  }
}

photo.style.display = "none"