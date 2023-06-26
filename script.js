/*Bringing our boxes */
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes)

checkBoxes()

function checkBoxes(){
    /*console.log(window.innerHeight / 5 * 4)*/
    
    const triggerBottom = window.innerHeight / 5*4
    /*Boxes is nodeless we can loop through*/
    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }
    })

}
/*It describes the size and position of each section 
 
https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
*/
