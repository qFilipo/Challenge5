let listItem = document.querySelectorAll(".list-item")
let dotItem = document.querySelectorAll(".dot")
let list=document.getElementById("main-list")
let mark=document.getElementById("mark")
let clicker=true
let notNumberGetZero = false

/*reset function to clear all at once*/
mark.addEventListener('click', function(){
    if (clicker===true && notNumberGetZero===false){
        listItem.forEach(function(element){
            element.style.background = "hsl(0, 0%, 100%)"
        })
        dotItem.forEach(function(element){
            element.style.visibility = "hidden"
        })
        statusCalc(true)
        markText(true)
        clicker=false
        notNumberGetZero = true
    }
    else{
        makeAllUnread()
        loopObjectList()
        statusCalc()
        markText(false)
        notNumber.style.visibility=""
        clicker=true
        notNumberGetZero = false
    }

})

/*change heaader text to align with functions*/
function markText(state){
    if (state === true){
        mark.textContent = "Mark all as unread"
    }
    else{
        mark.textContent = "Mark all as read"
    }
}

/*reset all <li> status to default*/
function makeAllUnread(){
    listItem.forEach(function(element){
        element.style.background = ""
    })
    dotItem.forEach(function(element){
        element.style.visibility = ""
    })
}

let notNumber = document.getElementById("news-number")
notNumber.textContent = list.children.length

let x=[]
/*when page loaded generate notification number*/
document.addEventListener("DOMContentLoaded", loopObjectList)

/*get number of created <li>*/
function loopObjectList(){
    x=[]
    for (let i=0; i<list.children.length; i++){
        x.push(true)
    }
}

/*update notification number*/
function statusCalc(click){
    let z = 0
    for (let i=0; i<list.children.length; i++){
        if (x[i] === true){
            z++
        }
    }
    if (z===0 || click===true){
        notNumber.style.visibility="hidden"
        notNumberGetZero = true
        markText(true)
    }
    else{
        notNumber.textContent=z
    }
}

/*change <li> when clicked*/
listItem.forEach(function(element, index){
    element.addEventListener('click', function(){
        if (x[index] === true){
            element.style.background = "hsl(0, 0%, 100%)"
            dotItem[index].style.visibility = "hidden"
            x[index]=false
        }
        statusCalc()
    })
})