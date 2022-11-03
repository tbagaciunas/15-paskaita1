const tabs = document.getElementsByClassName("tab")
const buttons = document.getElementsByTagName("button")

function showTab(event, id){
    for(var x of tabs){
        x.classList.remove("block")
    }
    document.getElementById(id).classList.add("block")

    // Mygtukų stilius
    for(var x of buttons){
        x.classList.remove("active")
    }
    event.currentTarget.classList.add("active")
}


