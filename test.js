
const btnsAddtag = document.getElementsByClassName("plus");
for(var i=0 ; i<btnsAddtag.length ; i++){
    btnsAddtag[i].addEventListener("click",increment)
}
function increment(event) {
    var btnplus = event.target
    var divElt = btnplus.parentElement 
    var quantitytag = divElt.querySelector("p")
    var quantity = Number (quantitytag.innerHTML)
    quantity++
    quantitytag.innerHTML = quantity ;
    var priceTag = divElt.parentElement.parentElement.querySelector(".price");
    var unitPriceTag = divElt.parentElement.parentElement.querySelector(".unitPrice");
    var unitPrice = Number(unitPriceTag.innerHTML)
    var price = unitPrice*quantity;
    priceTag.innerHTML = price;
}
var checkTag = document.querySelectorAll(".check")
for (var j=0 ; j<checkTag.length ; j++) {
    checkTag[j].onclick = totalPrice
}
function totalPrice(event) {
    var checkTag = event.target ;
    var priceTag = checkTag.parentElement.parentElement.querySelector(".price")
    var price = Number(priceTag.innerHTML)
    var totalTag = document.getElementById("total");
    var total = Number(totalTag.innerHTML);
    var btnPlus = checkTag.parentElement.parentElement.querySelector(".plus")
    var btnMinus = checkTag.parentElement.parentElement.querySelector(".minus")
    if(checkTag.checked === true) {
        total+=price ;
        totalTag.innerHTML = total
        btnPlus.setAttribute("disabled",true);
        btnMinus.setAttribute("disabled",true);
    }
    else {
        total-= price
    }
    totalTag.innerHTML = total
    btnPlus.removeAttribute("disabled");
    btnMinus.removeAttribute("disabled");
}
const btndec = document.getElementsByClassName(".minus");
for (k=0 ; k<btndec.length ; k++) {
    btndec[k].addEventListener("click",decrement)
}
function decrement(event) {
    var btnMinus = event.target
    var divElt = btnMinus.parentElement
    var quantitytag = divElt.querySelector("p")
    var quantity = Number(quantitytag.innerHTML)
    quantity--
    if (quantity>=0){
    quantitytag.innerHTML = quantity
    var priceTag = divElt.parentElement.parentElement.querySelector(".price");
    var unitPriceTag = divElt.parentElement.parentElement.querySelector(".unitPrice");
    var unitPrice = Number(unitPriceTag.innerHTML)
    var price = unitPrice*quantity;
    priceTag.innerHTML = price;
    

    console.log(price)
    }
}
