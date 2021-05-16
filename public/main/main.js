const url = 'http://localhost:8080/todolist'

const dataArea = document.querySelector('#dataArea')

const addPageForm = document.getElementById('addPageForm')
const addTask = document.querySelector('.addTask')
const inputName = document.getElementById('inputName')
const inputDescription = document.getElementById('inputDescription')
const inputAssignedTo = document.getElementById('inputAssignedTo')
const inputStatus = document.getElementById('inputStatus')
const inputDate = document.getElementById('inputDate')

const backButton1 = document.getElementById("back-button-1")
const backButton2 = document.getElementById("back-button-2")
const addButton = document.getElementById("add-button")
const addSubmitButton = document.getElementById("addsubmitbutton")

const toggleAdd = () => {
    document.getElementById('contentPage').classList.toggle('displayNone')
    addPage.classList.toggle('displayNone')
    document.getElementById('logout-button').classList.toggle('displayNone')
    backButton2.classList.toggle('displayNone')
    addButton.classList.toggle('displayNone')
}

backButton2.addEventListener("click", toggleAdd)
addButton.addEventListener("click", toggleAdd)

// GET
async function renderContentPage() {
    const loadData = await fetch(url)
    const jsonData = await loadData.json()
    const updatedhtml = jsonData.reduce((acc, element) => {
        return acc + `
        <div class="container-fluid" data-id="${element.id}" data-name="${element.name}" data-description="${element.description}" data-assignedto="${element.assignedto}" data-duedate="${element.duedate}" data-status="${element.status}" >
            <div class="row content-background-1 py-3 py-md-3" style="box-shadow: 0 0 5px #333;">
                <div class="col d-flex justify-content-center">
                    <button class="toolbutton" id="delete-button"><i class="fas fa-trash delete-icon"></i></button>
                </div>
                <div class="col-8 d-flex justify-content-center">
                    <div class="content-text titletext">${element.name}</div>
                </div>
                <div class="col d-flex justify-content-center">
                    <button class="toolbutton" id="edit-button"><i class="fas fa-chevron-right edit-icon"></i></button>
                </div>
                <div class="container-fluid">
                    <div class="row p-3 mt-3 contenttext">
                        <div class="col">
                            <div class="row d-flex justify-content-center">
                                ${element.description}
                            </div>
                                
                            <div class="row d-flex justify-content-center content-background-gray">
                                ${element.assignedto}
                            </div>
                                    
                            <div class="row d-flex justify-content-center">
                                ${element.duedate}
                            </div>
                                
                            <div class="row d-flex justify-content-center content-background-gray">
                                ${element.status}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    }, "")
    dataArea.innerHTML = updatedhtml    
    
    
};

renderContentPage()

// POST
addTask.addEventListener('submit', (e) => {
    e.preventDefault();

    let id = '_' + Math.random().toString(36).substr(2, 9);

    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                id: id,
                name: inputName.value,
                description: inputDescription.value,
                assignedto: inputAssignedTo.value,
                duedate: inputDate.value,
                status: inputStatus.value
            })
        })
        .then(res => res.json())
        .then(data => {
            const dataArr = [];
            dataArr.push(data);
            renderContentPage(data);
        })
    toggleAdd()
    addPageForm.reset();
})

// DELETE & UPDATE


dataArea.addEventListener('click', (e) => {
    e.preventDefault();
    let deleteButtonPressed = e.target.id == 'delete-button'
    let editButtonPressed = e.target.id == 'edit-button'

    let id = e.target.parentElement.parentElement.parentElement.dataset.id

    if (deleteButtonPressed) {
        fetch(`${url}/${id}`, {
            method: 'DELETE'
            })
            .then(res => res.json())
            .then(() => renderContentPage())
    }

    if (editButtonPressed) {
        toggleAdd()
        const parent = e.target.parentElement.parentElement.parentElement;
        let nameContent = parent.dataset.name
        let descriptionContent = parent.dataset.description
        let assignedtoContent = parent.dataset.assignedto
        let duedateContent = parent.dataset.duedate
        let statusContent = parent.dataset.status

        inputName.value = nameContent
        inputDescription.value = descriptionContent
        inputAssignedTo.value = assignedtoContent
        inputDate.value = duedateContent
        inputStatus.value = statusContent
    }

    addSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                    id: id,
                    name: inputName.value,
                    description: inputDescription.value,
                    assignedto: inputAssignedTo.value,
                    duedate: inputDate.value,
                    status: inputStatus.value,
                })
        })
        .then(res => res.json())
        .then(() => renderContentPage())
    })
})