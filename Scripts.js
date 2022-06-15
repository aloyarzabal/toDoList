const button = document.getElementById('submitButton');
const textField = document.getElementById('textField');
const objectList = document.getElementById('objectList');
const body = document.getElementById('body');
const colorButtonBlue = document.getElementById('blueish');
const colorButtonPink = document.getElementById('pinkish');
const colorButtonLime = document.getElementById('limeish');
const colorButtonOrange = document.getElementById('orangeish');



function initialChecks(textToCheck){
    //lowercase and first Capital letter;
    let task = textToCheck.toLowerCase();
    let firstCapitalLetter = task.charAt(0).toUpperCase();
    task = firstCapitalLetter + task.slice(1);
    return task;
}


function insertTaskInTheList(){
    let task = textField.value;
    if(task !=""){
        let checkedTask = initialChecks(task);
        textField.value = "";

        const item = `
                    <div class="singleTask">
                    <div id="trashIcon" class="iconInTheTask trashIcon"> </div>
                    <div id="checkIcon" class="iconInTheTask uncheckedIcon"> </div>
                        <p class="textInsideList"> ${checkedTask}</p>
                    </div>
                    `; 
        
        objectList.insertAdjacentHTML("beforeend", item);
    }
}


button.addEventListener('click', ()=>{
    insertTaskInTheList();
})

document.addEventListener("keypress", (e)=>{
    if(e.key == "Enter"){
        e.preventDefault();

        insertTaskInTheList();
    }
})

objectList.addEventListener("click", (event)=>{
    let element = event.target;
    const elementFunction = element.id;
    if(elementFunction == 'trashIcon'){
        element.parentNode.parentNode.removeChild(element.parentNode);
    }
    else if (elementFunction == 'checkIcon'){
        if(element.classList[1] == "uncheckedIcon"){
            element.classList.replace ("uncheckedIcon", "checkedIcon");
            element.parentNode.classList.add("textItemDone");
        }
        else {
            element.classList.replace ("checkedIcon", "uncheckedIcon");
            element.parentNode.classList.remove("textItemDone");
        }
    }
})

colorButtonBlue.addEventListener("click", ()=>{
    body.removeAttribute("class");
    body.classList.add("blueish");
})
colorButtonPink.addEventListener("click", ()=>{
    body.removeAttribute("class");
    body.classList.add("pinkish");
})
colorButtonLime.addEventListener("click", ()=>{
    body.removeAttribute("class");
    body.classList.add("limeish");
})
colorButtonOrange.addEventListener("click", ()=>{
    body.removeAttribute("class");
    body.classList.add("orangeish");
})


