const addBtn = document.querySelector("#add");
const searchBtn = document.querySelector("#search");

const addSection = document.querySelector("#addSection");
const searchSection = document.querySelector("#searchSection");

const changeAdd = () => {
    // console.log(addBtn)
    // console.log(searchSection)
    searchSection.classList.add("d-none");
    searchSection.classList.remove("d-flex");
    
    
    addSection.classList.remove("d-none");
    addSection.classList.add("d-flex");
}

const changeSearch = () => {
    addSection.classList.remove("d-flex");
    addSection.classList.add("d-none");

    searchSection.classList.remove("d-none");
    searchSection.classList.add("d-flex");
}

addBtn.addEventListener("click", changeAdd)
searchBtn.addEventListener("click", changeSearch)