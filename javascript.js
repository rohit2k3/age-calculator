function check() {
    var dob = document.getElementById("dob").value;
    if (dob == "") {
        alert("Please select Date of Birth");
    } else if (dob != "") {
        var date = new Date();
        var array = dob.split("-");
        var year = date.getFullYear() - array[0];
        var month = date.getMonth()+1 - array[1];
        var day = date.getDate() - array[2];
        document.getElementById("today-box").style.visibility= "visible";
        document.getElementById("btn").style.backgroundColor= "teal";
        document.getElementById("label").innerHTML = "You are "+year+" year "+month+" months "+day+ " days old";
    }
}