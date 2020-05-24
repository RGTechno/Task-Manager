// let btnAdd=document.getElementById("btnAdd")
// let btnClear=document.getElementById("btnClear")
// let btnSort=document.getElementById("btnSort")
// let btnReset=document.getElementById("btnReset")
// let inpTask=document.getElementById("inpTask")

let btnAdd=$("#btnAdd")
let btnClear=$("#btnClear")
let btnReset=$("#btnReset")
let btnSort=$("#btnSort")
let inpTask=$("#inpTask")
let ulTaskList=$("#ulTaskList")

function addItem(){
    let listItem=$("<li>",{
        "class":"list-group-item",
        text: inpTask.val()
    })
    listItem.click(()=>{
        listItem.toggleClass("done")
    })
    ulTaskList.append(listItem)
    inpTask.val("")
    toggleButtons()
}

function toggleButtons(){
    btnClear.prop("disabled",inpTask.val()=="")
    btnAdd.prop("disabled",inpTask.val()=="")
    btnSort.prop("disabled",ulTaskList.children().length<1)
    btnReset.prop("disabled",ulTaskList.children().length<1)
}

inpTask.keypress(function(event){
    if(event.which==13){
        addItem()
    }
})

inpTask.on("input",toggleButtons)

btnAdd.click(addItem)

btnClear.click(()=>{
    inpTask.val("")
    toggleButtons()
})

btnReset.click(()=>{
    $(".done").remove() 
})

btnSort.click(()=>{
    ulTaskList.append($(".done"))
})




