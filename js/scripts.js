$('.submit').click(function () {
    var Name = $('#fname').val();
    var Email = $('#email').val();
    var Message = $('message');
    var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
    if (Name == '' || Email == '' || Message == '') {
        alert('Please fill in the missing information!');
    } else {
        alert(' Hello ' + Name + ', we have received your message. Thank you for reaching out to us.');
    }
});


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
    var cleaning = 0;
    var addCleaning = document.getElementById("clean",);
    if (addCleaning.checked === true) {
        cleaning = 300;
    }
    return parseInt(cleaning);
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