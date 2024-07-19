const img_john = document.querySelector(".image-john");
const img_tanya = document.querySelector(".image-tanya");
const testimony_Tanya = document.querySelector(".testimony-of-tanya");
const testimony_John = document.querySelector(".testimony-of-john");

function prev() {
        img_john.style.display = 'none'
        img_tanya.style.display = 'block'

        testimony_John.style.display = 'none'
        testimony_Tanya.style.display = 'block'
}

function next() {
        img_tanya.style.display = 'none'
        img_john.style.display = 'block'
        
        testimony_Tanya.style.display = 'none'
        testimony_John.style.display = 'block'
}



        