// add section elements.
const addBtn = document.querySelector("#add");
const searchBtn = document.querySelector("#search");
const addSection = document.querySelector("#addSection");
const searchSection = document.querySelector("#searchSection");

// add section 
const ing = [];
const addIng = document.querySelector("#addIng");
const addButton = document.querySelector("#addBtn");
const ingList = document.querySelector("#ingList");

// Add section of home page.
const changeAdd = () => {
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

// for adding ingrediantes on the add section.
const addIngredient = () => {
    // console.log(addIng.value)
    

    if (ing.includes(addIng.value)){
        console.log("Item already added.")
    } else {
        ing.push(addIng.value)

        const newIng = document.createElement("li");
        newIng.classList = "bg-light col-9 my-2 text-center h2 lead p-2";
        newIng.textContent = addIng.value;
        ingList.appendChild(newIng);
    }
    addIng.value = ""
    console.log(ing)
}

addBtn.addEventListener("click", changeAdd)
searchBtn.addEventListener("click", changeSearch)

addButton.addEventListener("click", addIngredient)