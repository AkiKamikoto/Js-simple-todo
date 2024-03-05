const listElement = document.getElementById("list")
const inputElement = document.getElementById("title")
const createBtn = document.getElementById("create")

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
    return `<li>
    <span class = "${note.complete ? "text-decoration-line-through" : ""}">${note.title}</span>
    <span>
        <span data-index="${index}" data-type="togle" class="btn btn-small btn-success"></span>
        <span data-index="${index}" data-type="remove" class="btn btn-small btn-danger"> </span>
    </span>
</li>`
}
render()

createBtn.onclick = function(){
    if(inputElement.value === 0){
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

listElement.onclick = function(event) {
    if (event.target.dataset.index){
        const index = event.target.dataset.index
        const type = event.target.dataset.type

        if (type === "togle"){
            notes[index].complete = !notes[index].complete
        } else if (type === "remove"){
            notes.splice(index,1)
        }
        render()
    }
}