
function getSizeCost() {
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
}
function getMaterialCost() {
    var selectedCrust = document.getElementById("materials").value;
    return parseInt(selectedCrust);
}
function getNumber() {
    var selectedNumber = document.getElementById("numberofcleaners").value;
    return parseInt(selectedNumber);
}
function cleaning() {
    var mushroom = 0;
    var addMushroom = document.getElementById("clean",);
    if (addMushroom.checked === true) {
        mushroom = 300;
    }
    return parseInt(mushroom);
}

function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getSizeCost() + getMaterialCost() + cleaning()) * (getNumber());
    var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();
        console.log(totalPrice);
        alert("Hello " + name + ". Thank you for chosing KFMP Cleaners Ltd. Your request of " + getNumber() + " Cleaner(s) has been processed successfully and  we will be sending cleaner(s) to " +  location +  " . " + "Your total amount payable is "  + totalPrice + ". We will call you shortly on " + number);
}
