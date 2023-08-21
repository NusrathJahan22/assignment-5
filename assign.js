let total =0;
function kitchenWare(data){
    const selectedItemContainer= document.getElementById("selected-items")
    const itemName=data.children[2].children[0].innerText
    console.log(data.children[2].children[0].innerText)
    const h2 = document.createElement("h2")
    h2.innerText= itemName
    selectedItemContainer.appendChild(h2)
    const newElementString=selectedItemContainer.value
    const newElement=parseFloat(newElementString)
    // const kitchen=data.parentNode.childNodes[3].innerText.split(" ")[1]
    // console.log(data.children[2].children[1].innerText)
    const kitchenPrice=data.children[2].children[1].innerText

    // if side
    if(200 <= total){
        alert('you can get discount')
    }

total =parseInt(total)+ parseInt(kitchenPrice)
 document.getElementById("total").innerText= total
// console.log(total)
}
