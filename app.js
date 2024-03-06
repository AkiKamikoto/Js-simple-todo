const listElement = document.getElementById("list")
const inputElement = document.getElementById("title")
const createBtn = document.getElementById("create")
const deleteElement = document.getElementById("delete-id")
const popUpDeleteElement = document.getElementById("pop-up-section")


const notes = [
    {
        title: "My first todo",
        complete: false
    },
    {
        title: "Remove me, iam completed",
        complete: true
    }
]



function render(){
    listElement.innerHTML = ""
    for(let i = 0; i <= notes.length -1; i++){
        listElement.insertAdjacentHTML("beforeend",getTemplate(notes[i], i))
    }
}

function getTemplate(note, index){
    return `<li class = "${note.complete ? "complete" : "not-complete"}">
    <span class = "${note.complete ? "text-decoration-line-through" : ""}">${note.title}</span>
    <span>
        <span data-index="${index}"data-type="togle" class="btn btn-small btn-success">Complete</span>
        <span data-index="${index}"data-type="remove" class="btn btn-small btn-danger">Delete</span>
    </span>
</li>`
}
render()

function getPopUpDelete(title,index){
    return `

    <div id="delete-pop-up">
        <p>Заметка <span id="delete-id">${title}</span> была удалена</p>
    </div>
`
}



createBtn.onclick = function(){
    if(inputElement.value == 0){
        return
    }

    const newNote = {
        title: inputElement.value,
        complete: false
    }

    notes.push(newNote)
    render()
    inputElement.value = ""

}

const popUpDelete = document.getElementById("delete-pop-up")

listElement.onclick = function(event) {
    if (event.target.dataset.index){
        const index = event.target.dataset.index
        const type = event.target.dataset.type

        if (type === "togle"){
            notes[index].complete = !notes[index].complete
        } else if (type === "remove"){
            
            popUpDeleteElement.insertAdjacentHTML("beforeend",getPopUpDelete(notes[index].title))

            notes.splice(index,1)


        }
        render()
    }
}

