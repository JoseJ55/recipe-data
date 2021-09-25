// add section elements.
const addBtn = document.querySelector("#add");
const searchBtn = document.querySelector("#search");
const addSection = document.querySelector("#addSection");
const searchSection = document.querySelector("#searchSection");

const nameText = document.querySelector("#nameText");
const descText = document.querySelector("#descText");

// add section 
const ing = [];
const addIng = document.querySelector("#addIng");
const addButton = document.querySelector("#addBtn");
const ingList = document.querySelector("#ingList");

//macros section
const macros = [];
const macroSelect = document.querySelector("#macroSelect");
const macrosText = document.querySelector("#macrosText");
const macrosBtn = document.querySelector("#macrosBtn");
const macrosSection = document.querySelector("#macrosSection");

// Steps section
const steps = [];
const stepText = document.querySelector("#stepText");
const stepBtn = document.querySelector("#stepBtn");
const stepSection = document.querySelector("#stepSection");

const submitBtn = document.querySelector("#submitBtn");

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

//add section of the macros section
const addMacros = () => { // change array to {:}
    if(macros.includes(`${macroSelect.value} - ${macrosText.value}`)){
        console.log("Item already added.");
    } else {
        macros.push(`${macroSelect.value} - ${macrosText.value}`);

        const newMacros = document.createElement("li");
        newMacros.classList = "bg-light col-9 my-2 text-center h2 lead p-2";
        newMacros.textContent = `${macroSelect.value} - ${macrosText.value}`;
        macrosSection.appendChild(newMacros)
    }
    macrosText.value = "";
}

// step section for cooking steps
const addStep = () => {
    if(steps.includes(stepText.value)){
        console.log("Step already added.")
    } else {
        steps.push(stepText.value);

        const newStep = document.createElement("li");
        newStep.classList = "bg-light col-9 my-2 text-center h2 lead p-2";
        newStep.textContent = stepText.value;
        stepSection.appendChild(newStep)
    }
    stepText.value = "";
}

const submitAll = () => {
    console.log("name: ", nameText.value);
    console.log("desc:", descText.value);
    console.log("Ing: ", ing);
    console.log("macros: ", macros);
    console.log("steps: ", steps);
    // console.log(window.location.href + "api/")
    const data = {
        name: nameText.value,
        desc: descText.value,
        
    }

    fetch(window.location.href + "api/", {
        method: 'POST',
        headers: {"Content-Type": "application/json"}
    }).then((res) => {
        console.log(res)
    })
}

addBtn.addEventListener("click", changeAdd)
searchBtn.addEventListener("click", changeSearch)

addButton.addEventListener("click", addIngredient)

macrosBtn.addEventListener("click", addMacros)

stepBtn.addEventListener("click", addStep)

submitBtn.addEventListener("click", submitAll)