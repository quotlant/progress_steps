const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1

next.addEventListener('click', () => {
    
    currentActive++
    
    if (!circles || circles.length === 0) {
        console.error("Circles are not properly initialized.");
        return;
    }

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update()
})

prev.addEventListener('click', () => {
    
    currentActive--
    
    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

/**
 * Updates the progress steps by adding or removing the 'active' class
 * to the circles based on the currentActive index.
 */
function update() {


      // Update the active state of circles based on the current step
        circles.forEach((circle, idx) => {
                 if (idx < currentActive) {
    
                    circle.classList.add ('active')
    
                 }
              else {
                circle.classList.remove ('active')
              }
    
    
        })



      const actives = document.querySelectorAll('.active')

      progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    
    


if (currentActive == 1) {

      prev.disabled = true 

}

else if (currentActive === circles.length) {

    next.disabled = true
}
else {

    prev.disabled = false
    next.disabled = false
  }

}