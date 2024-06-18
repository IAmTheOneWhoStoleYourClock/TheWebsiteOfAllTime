// This code makes the background roatate. (Although most of it is actually to keep it centered tbh.)
// For no apperent reason, it spins much faster while dev tools are pulled up. Don't even know where I would begin to fix that.
// WARNING: Due to how vw and vh work, it incldues the scrollbar. I could reduce its size, but that makes an accessabilty concern. I wish it just wouldn't but it does. I tried using percentages instead, but it runs into the same issue. I tried to use .clientWidth (WHICH IS BUILT FOR THIS PURPOSE) and it didn't work. While hypotechically fixable, It would complicate this immensely and problably produce lag. It wouldn't actually cause a problem on a mobile device, so i'm fine with this.


// Defining nessesary values.
let body = document.querySelector("body");
// BEEG tables
let squares = [document.getElementById("largepop"), document.getElementById("largebg"), document.getElementById("mediumpop"), document.getElementById("mediumbg"), document.getElementById("smallpop"), document.getElementById("smallbg")]
let squareOffsets = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
let baseOffsets = ["5","10","20","25","35","40"]
// Only need three values here since the angles for the respective pops and bgs should be identical.
let squareAngles = [0,0,0]

// Defining alignSquares, which will center the square when run. (At least that's the hope, It took way too long to get something that works.)
function alignSquares() {
  let offsetIndex = 0
  for (let square of squares) {
    if (window.innerWidth > window.innerHeight) {
      square.style.top = baseOffsets[offsetIndex].toString() + "vh"
      square.style.left = (((window.innerWidth - window.innerHeight) / 2) + square.offsetTop).toString() + "px";
    } else {
      square.style.left = baseOffsets[offsetIndex].toString() + "vw"
      square.style.top = (((window.innerHeight - window.innerWidth) / 2) + square.offsetLeft).toString() + "px";
    }
    offsetIndex += 1
  }
}

// Run it once to get everything setup.
alignSquares()

// Run alignSquares again if the window resizes.
window.addEventListener('resize', alignSquares);

// Rotate the squares when the mouse moves.
body.addEventListener('mousemove', function() {
  console.log("speen")
  for (let i = 0; i < squareAngles.length; i++) {
    // Makes it spin clockwise if it is even, and counterclockwise if it is odd
    // Also adds 0.1 per index because I think that looks nicer.
    if (i % 2 == 1) {
      squareAngles[i] -= 0.7 + (0.1 * i)
    }
    else {
      squareAngles[i] += 0.7 + (0.1 * i)
    }
    squares[i * 2].style.transform = "rotate(" + String(squareAngles[i]) + "deg)"
    squares[(i * 2) + 1].style.transform = "rotate(" + String(squareAngles[i]) + "deg)"
  }
});

// Log that it's done, just in case something goes wrong.
console.log("Background loaded successfully!");