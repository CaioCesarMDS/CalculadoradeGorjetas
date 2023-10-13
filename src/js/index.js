function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById("bill").value;
    let serviceQuality = document.getElementById("serviceQuality").value;
    let people = document.getElementById("people").value;

    if (bill == " " || serviceQuality == 0) {
        alert("Por Favor, preencha os campos necessários!");
        return
    }

    if (people == "" || people < 1) {
        people = 1;
        document.getElementById("each").style.display = "none";
    }
    else {
        document.getElementById("each").style.display = "block";
    }

    let total = (serviceQuality * bill) / people;
    total = total.toFixed(2);
    console.log(total)
    document.getElementById("tip").innerHTML = total;
    document.getElementById("totalTip").style.display = "block";
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("tipsForm").addEventListener("submit", calculateTip);