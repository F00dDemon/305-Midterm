document.getElementById('flight-form').onsubmit = () => {

    clearErrors();

    let isValid = true;

    let flightlist = document.getElementById('flight-list').value;
    let departure = document.getElementById('departure').value;
    let numtravelers = document.getElementById('numtravelers').value;
    


    if(flightlist === "none"){
        isValid = false;
        document.getElementById("err-dest").style.display = "block";
    }
    if(!departure){
        isValid = false;
        document.getElementById("err-depart").style.display = "block";
    }
    if(numtravelers <= 0){
        isValid = false;
        document.getElementById("err-trav").style.display = "block";
    }

    return isValid
}

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}