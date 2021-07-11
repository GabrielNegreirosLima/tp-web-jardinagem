// Stars selection
const stars = document.querySelectorAll(".fa.fa-star");

stars.forEach( el => {
    el.addEventListener("click", e => {
        const starEl = e.currentTarget;
        starsChecker(starEl);
    });
});

function starsChecker(starEl){
    const currentStarIdNumber = starEl.id[4];
    const numberOfStars = 5;
    let previousStar;
    
    if (starEl.classList.contains("checked")) {
        for (let index = numberOfStars; index >= currentStarIdNumber; index--) {
            previousStar = document.querySelector(`#star${index}`);
            previousStar.classList.remove("checked");
        }
        return;
    }

    for (let index = 1; index <= currentStarIdNumber; index++) {
        previousStar = document.querySelector(`#star${index}`);
        previousStar.classList.add("checked");
    }
    return;
}

// Reset button
const resetEl = document.querySelector(".botao-exclude");
resetEl.addEventListener("click", e => {
    const star1El = document.querySelector("#star1");
    starsChecker(star1El);
    star1El.classList.add("checked")
});


// Photos/images selection
// With backend is possible to show the images uploaded.
/*
const fileEl = document.querySelector("#imagem");

fileEl.addEventListener('change', e => {
    
    if (fileEl.files && fileEl.files[0]){
        const reader = new FileReader();

        reader.onload = ev => {
            const img = document.createElement("img");
            fileEl.appendChild(img);
        }
        reader.readAsDataURL(fileEl.files[0]);
    }
});
*/