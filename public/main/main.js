const dataArea = document.querySelector('#dataArea')
async function 求其名() {
    const loadData = await fetch('http://localhost:8080/todolist')
    const jsonData = await loadData.json()
    const updatedhtml = jsonData.reduce((acc, element) => {
        return acc + `
        <div class="container-fluid">
        <div class="row content-background-6 py-3 py-md-3" style="box-shadow: 0 0 5px #333;">
            <div class="col text-center">
                <div class="pim">
                    <i class="fas fa-circle pl-2 pi-l"></i>
                </div>
            </div>
            <div class="col-8 text-center">
                <div class="content-text">${element.id} ${element.content}</div>
            </div>
            <div class="col text-right pr-4">
                <a href="../edit/Edit.html"><i class="fas fa-chevron-right edit-icon"></i></a>
            </div>
            <div class="container-fluid mt-3">
                <div class="row">
                    <div class="col text-right slider-text">
                        TODO | INPROGRESS
                    </div>
                    <div class="col text-center">
                        <form class="range-field w-100">
                            <input class="border-0" type="range" min="1" max="4" />
                        </form>
                    </div>
                    <div class="col text-left slider-text">
                        REVIEW | DONE
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }, "")
    dataArea.innerHTML = updatedhtml
};

求其名()

// console.log(document.getElementById(sliderTest).value)