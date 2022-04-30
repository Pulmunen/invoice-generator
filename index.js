const items = document.getElementById("item-container")
const itemTotals = document.getElementById("item-totals")
const notes = document.getElementById("notes-text")
const sumTotal = document.getElementById("sum-total")
const washCar = document.getElementById("carwash")
const mowLawn = document.getElementById("lawnmow")
const pullWeeds = document.getElementById("weedpull")
const sendInvoice = document.getElementById("send-invoice")
const washCarText = "Wash Car"
const mowLawnText ='Mow Lawn'
const pullWeedsText = 'Pull Weeds'
let tasksArr = []
let sumTotalCalc = 0
const carPrice = 10
const lawnPrice = 20
const pullPrice = 30
sumTotal.innerHTML = '$ ' + sumTotalCalc


washCar.addEventListener("click",addItem)
mowLawn.addEventListener("click", addItem)
pullWeeds.addEventListener("click",addItem)

sendInvoice.addEventListener("click", performReset)


function addItem(e){
if (e.target == washCar && !tasksArr.includes(washCarText)){
    tasksArr.push(washCarText)
    items.innerHTML +=`<div>${washCarText}</div>`
    itemTotals.innerHTML +=`<div>$${carPrice}</div>`
    sumTotalCalc +=carPrice
    } else if (e.target == mowLawn  && !tasksArr.includes(mowLawnText)){
        tasksArr.push(mowLawnText)
        items.innerHTML +=`<div>${mowLawnText}</div>`
        itemTotals.innerHTML +=`<div>$${lawnPrice}</div>`
        sumTotalCalc +=lawnPrice
    } else if (e.target == pullWeeds  && !tasksArr.includes(pullWeedsText)){
        tasksArr.push(pullWeedsText)
        items.innerHTML +=`<div>${pullWeedsText}</div>`
        itemTotals.innerHTML +=`<div>$${pullPrice}</div>`
        sumTotalCalc +=pullPrice
    }

    if (tasksArr.length >0){
        sumTotal.innerHTML = `$${sumTotalCalc}`
        sumTotal.style.color = "#4A4E74"
        notes.style.display = "block"
    }
}

function performReset(e){
    e.preventDefault()
    sumTotalCalc = 0
    sumTotal.innerHTML = '$0'
    items.innerHTML = ''
    itemTotals.innerHTML = ''
    tasksArr = []
    sumTotal.style.removeProperty('color')
    notes.style.display = 'none'
    }
    

