// fetch
const dataArea = document.querySelector('#dataArea')
async function 求其名() {
    const loadData = await fetch('http://localhost:8080/todolist')
    const jsonData = await loadData.json()
    const updatedhtml = jsonData.reduce((acc, element) => {
        return acc + `
        <div class="container-fluid">
        <div class="row content-background-1 py-3 py-md-3" style="box-shadow: 0 0 5px #333;">
            <div class="col">
                <button class="toolbutton"><i class="fas fa-trash delete-icon"></i></button>
            </div>
            <div class="col-8 text-center">
                <div class="content-text titletext">${element.name}</div>
            </div>
            <div class="col text-right pr-4">
                <button class="toolbutton"><i class="fas fa-chevron-right edit-icon"></i></button>
            </div>
            <div class="container-fluid">
                <div class="row p-3 mt-3 contenttext">
                    ${element.description}
                    <br/>
                    ${element.assignedto}
                    <br/>
                    ${element.duedate}
                    <br/>   
                    ${element.status}
                </div>
            </div>
        </div>
    </div>
        `
    }, "")
    dataArea.innerHTML = updatedhtml
};

求其名()

// edit button

const goToEdit = () => {
    window.location.href = "http://localhost:8080/edit/edit.html"
}

const editButton = document.getElementById("edit-button")

editButton.addEventListener("click", goToEdit)

// add button

const goToAdd = () => {
    window.location.href = "http://localhost:8080/add-item/Add-item.html"
}

const AddButton = document.getElementById("add-button")

AddButton.addEventListener("click", goToAdd)