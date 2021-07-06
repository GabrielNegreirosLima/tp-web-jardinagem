// Stars selection
const stars = document.querySelectorAll(".fa.fa-star");

stars.forEach( el => {
    el.addEventListener("click", e => {
        const starEl = e.currentTarget;
        starEl.classList.toggle("checked");
    });
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
