// Stars selection
const stars = document.querySelectorAll(":not([disabled]).fa.fa-star");
<<<<<<< HEAD
stars.forEach(el => {
=======

stars.forEach( el => {
>>>>>>> 1198d6b6cf4800e54e7422d3f9e7c9bdbc968872
    el.addEventListener("click", e => {
        const starEl = e.currentTarget;
        console.log(starEl);
        starsChecker(starEl);
    });
});

<<<<<<< HEAD
function starsChecker(starEl) {
    const currentStarIdNumber = starEl.classList[0][4];
    const numberOfStars = 5;
    let previousStar;

=======
function starsChecker(starEl){
    const currentStarIdNumber = starEl.classList[0][4];
    const numberOfStars = 5;
    let previousStar;
    
>>>>>>> 1198d6b6cf4800e54e7422d3f9e7c9bdbc968872
    if (starEl.classList.contains("checked")) {
        for (let index = numberOfStars; index >= currentStarIdNumber; index--) {
            previousStar = document.querySelector(`:not([disabled]).star${index}`);
            previousStar.classList.remove("checked");
        }
        return;
    }

    for (let index = 1; index <= currentStarIdNumber; index++) {
        previousStar = document.querySelector(`:not([disabled]).star${index}`);
        previousStar.classList.add("checked");
    }
    return;
}

// Reset button
const resetEl = document.querySelector(".botao-exclude");
resetEl.addEventListener("click", e => {
    const star1El = document.querySelector(":not([disabled]).star1");
    starsChecker(star1El);
    star1El.classList.add("checked")
});