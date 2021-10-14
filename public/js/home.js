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

// search part of website
const searchRecipeBtn = document.querySelector("#searchRecipeBtn");
const searchRecipeText = document.querySelector("#searchRecipeText");
const searchArea = document.querySelector("#searchArea");
// search results
const searchedArea = document.querySelector("#searchedArea");
const searchedAreaMain = document.querySelector("#searchedAreaMain");

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

const submitAll = async () => {
    const data = {
        name: nameText.value,
        desc: descText.value,
        ingredient: ing,
        macro: macros,
        step: steps,
    }
    const add = await fetch(window.location.href + "api/", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })

    let msg = await add.json();
    console.log(msg)
}

// search results function
const mainResults = (data) => {
    const main = document.createElement("div");
    main.classList = "d-flex flex-column col-4 border border-warning mt-4 bg-light";
    searchedAreaMain.appendChild(main);

    const title = document.createElement("p");
    title.classList = "h2 text-center";
    title.textContent = data.name;
    main.appendChild(title);

    // ------------- desc ------------------
    const descArea = document.createElement("div");
    descArea.classList = "col d-flex px-4 my-1";
    main.appendChild(descArea);

    const descTitle = document.createElement("p");
    descTitle.classList = "col-6 h3 lead";
    descTitle.textContent = "Description: "
    descArea.appendChild(descTitle);

    const descText = document.createElement("p");
    descText.classList = "col-6 text-wrap";
    descText.textContent = data.desc;
    descArea.appendChild(descText);

    // ----------Ing ------------------
    const ingArea = document.createElement("div");
    ingArea.classList = "col d-flex px-4 my-1";
    main.appendChild(ingArea);

    const ingText = document.createElement("p");
    ingText.classList = "col-2 h3 lead";
    ingText.textContent = "Ingredients: ";
    ingArea.appendChild(ingText);

    const ingList = document.createElement("ul");
    ingList.classList = "d-flex flex-column align-items-center list-unstyled col-10";
    ingArea.appendChild(ingList);

    for(let i = 0; i < data.ingredients.length; i++){
        const ing = document.createElement("li");
        ing.classList = "my-1 text-center";
        ing.textContent = data.ingredients[i].ingredient;
        ingList.appendChild(ing);
    }

    // ---------------- macro -------------------
    const macroArea = document.createElement("div");
    macroArea.classList = "col d-flex px-4 my-1";
    main.appendChild(macroArea);

    const macroTitle = document.createElement("p");
    macroTitle.classList = "col-2 h3 lead";
    macroTitle.textContent = "Macros: "
    macroArea.appendChild(macroTitle);

    const macroList = document.createElement("ul");
    macroList.classList = "d-flex flex-column align-items-center list-unstyled col-10";
    macroArea.appendChild(macroList);

    for(let i=0; i<data.macros.length; i++) {
        const macro = document.createElement("li");
        macro.classList = "my-1 text-center";
        macro.textContent = data.macros[i].macro;
        macroList.appendChild(macro);
    }

    // ---------------steps -------------------
    const stepArea = document.createElement("div");
    stepArea.classList = "col d-flex px-4 my-1";
    main.appendChild(stepArea);

    const stepTitle = document.createElement("p");
    stepTitle.classList = "col-2 h3 lead";
    stepTitle.textContent = "steps"
    stepArea.appendChild(stepTitle);

    const steplist = document.createElement("ol");
    steplist.classList = "d-flex flex-column col-10";
    stepArea.appendChild(steplist);

    for(let i=0; i<data.steps.length; i++) {
        const step = document.createElement("li");
        step.classList = "my-1 text-center";
        step.textContent = data.steps[i].step;
        steplist.appendChild(step);
    }
}

const simResults = (data) => {
    console.log(data)

    for(let i=0; i < data.length; i++){
        console.log(data[i])
    
        const main = document.createElement("li");
        main.classList = "d-flex flex-column col-4 border border-warning mt-4 bg-light";
        searchedArea.appendChild(main);

        const title = document.createElement("p");
        title.classList = "h2 text-center";
        title.textContent = data[i].name;
        main.appendChild(title);

        // ------------- desc ------------------
        // const descArea = document.createElement("div");
        // descArea.classList = "col d-flex px-4 my-1";
        // main.appendChild(descArea);

        // const descTitle = document.createElement("p");
        // descTitle.classList = "col-6 h3 lead";
        // descTitle.textContent = "Description: "
        // descArea.appendChild(descTitle);

        // const descText = document.createElement("p");
        // descText.classList = "col-6 text-wrap";
        // descText.textContent = data.desc;
        // descArea.appendChild(descText);

        // ----------Ing ------------------
        // const ingArea = document.createElement("div");
        // ingArea.classList = "col d-flex px-4 my-1";
        // main.appendChild(ingArea);

        // const ingText = document.createElement("p");
        // ingText.classList = "col-2 h3 lead";
        // ingText.textContent = "Ingredients: ";
        // ingArea.appendChild(ingText);

        // const ingList = document.createElement("ul");
        // ingList.classList = "d-flex flex-column align-items-center list-unstyled col-10";
        // ingArea.appendChild(ingList);

        // for(let i = 0; i < data.ingredients.length; i++){
        //     const ing = document.createElement("li");
        //     ing.classList = "my-1 text-center";
        //     ing.textContent = data.ingredients[i].ingredient;
        //     ingList.appendChild(ing);
        // }

        // ---------------- macro -------------------
        // const macroArea = document.createElement("div");
        // macroArea.classList = "col d-flex px-4 my-1";
        // main.appendChild(macroArea);

        // const macroTitle = document.createElement("p");
        // macroTitle.classList = "col-2 h3 lead";
        // macroTitle.textContent = "Macros: "
        // macroArea.appendChild(macroTitle);

        // const macroList = document.createElement("ul");
        // macroList.classList = "d-flex flex-column align-items-center list-unstyled col-10";
        // macroArea.appendChild(macroList);

        // for(let i=0; i<data.macros.length; i++) {
        //     const macro = document.createElement("li");
        //     macro.classList = "my-1 text-center";
        //     macro.textContent = data.macros[i].macro;
        //     macroList.appendChild(macro);
        // }

        // ---------------steps -------------------
        // const stepArea = document.createElement("div");
        // stepArea.classList = "col d-flex px-4 my-1";
        // main.appendChild(stepArea);

        // const stepTitle = document.createElement("p");
        // stepTitle.classList = "col-2 h3 lead";
        // stepTitle.textContent = "steps"
        // stepArea.appendChild(stepTitle);

        // const steplist = document.createElement("ol");
        // steplist.classList = "d-flex flex-column col-10";
        // stepArea.appendChild(steplist);

        // for(let i=0; i<data.steps.length; i++) {
        //     const step = document.createElement("li");
        //     step.classList = "my-1 text-center";
        //     step.textContent = data.steps[i].step;
        //     steplist.appendChild(step);
        // }
    }
}

// search results of website
const showData = async () => {
    const text = searchRecipeText.value.toLowerCase();

    await fetch(window.location.href + "api/?i=" + text, {
        method: 'GET',
        headers: {"Content-type": "application/json"}
    }).then(async (res) => {
        const j = await res.json();
        // console.log(j)

        if(j.data.exact){
            // console.log(j);
            // console.log(j.data);
            // console.log(j.data.exact);
            // console.log(j.data.similar);
            mainResults(j.data.exact);
            simResults(j.data.similar);
        } else {
            const main = document.createElement("p");
            main.classList = "d-flex flex-column col-6 h1 text-center mt-4";
            main.textContent = "No exact results."
            searchedAreaMain.appendChild(main)

            simResults(j.data)
        }
    })
}

addBtn.addEventListener("click", changeAdd)
searchBtn.addEventListener("click", changeSearch)

addButton.addEventListener("click", addIngredient)

macrosBtn.addEventListener("click", addMacros)

stepBtn.addEventListener("click", addStep)

submitBtn.addEventListener("click", submitAll)

searchRecipeBtn.addEventListener("click", showData);