// Stars selection
const stars = document.querySelectorAll(":not([disabled]).fa.fa-star");

stars.forEach( el => {
    el.addEventListener("click", e => {
        const starEl = e.currentTarget;
        console.log(starEl);
        starsChecker(starEl);
    });
});

function starsChecker(starEl){
    const currentStarIdNumber = starEl.classList[0][4];
    const numberOfStars = 5;
    let previousStar;
    
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