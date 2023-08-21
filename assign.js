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
    const kitchenPrice=data.children[2].children[1].innerText
    
//    end step

    // if side
    let button=document.getElementById("#button");
    // button.disable=true;
    if(200 <= total){
        alert("you can get discount")
    }else{
    }

total =parseInt(total)+ parseInt(kitchenPrice)
 document.getElementById("total").innerText= total

// discount

// const discountElementString=selectedItemContainer.value
//     const discountElement=parseFloat(discountElementString)
//     const discountPrice=data.children[2].children[1].innerText
//      discount=( total.innerText/100)*20
 
}
