
let getul = document.querySelector("#ul")



function foo(){
    let add = document.querySelector("#inp")
    let li = document.createElement("li")
    let liText = document.createTextNode(add.value)
    li.appendChild(liText)
    li.setAttribute("class","list")
    getul.appendChild(li)
    add.value = ""
    //delete btn work
    let deletebtn = document.createElement("button")
    let deletebtntext = document.createTextNode("delete")
    deletebtn.appendChild(deletebtntext)
    li.appendChild(deletebtn)
    deletebtn.setAttribute("onclick","del(this)")
    //edit btn work
    let editbtn = document.createElement("button")
    let editbtnText = document.createTextNode("Edit")
    editbtn.appendChild(editbtnText)
    editbtn.setAttribute("onclick","edit(this)")
    li.appendChild(editbtn)
    //delete button css
    deletebtn.setAttribute("class","btn btn-danger delgap")
    editbtn.setAttribute("class","btn btn-info editgap")

     
    
}

function deleteall(){
    getul.innerHTML = ""
}

// delete button javascript

function del(e) {
    e.parentNode.remove()
}
//edit button work

function edit(a){
   let edit = prompt("Enter edit value?",a.parentNode.firstChild.nodeValue)
   a.parentNode.firstChild.nodeValue = edit
    
}