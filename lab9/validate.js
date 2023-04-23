function validate() {
    var p1 = document.getElementById("pass1").value;
    var p2 = document.getElementById("pass2").value;


    if (p1.length < 8) {
        alert("First password too short!")
    } else if (p2.length < 8) {
        alert("Second password too short!")
    } else if (p1 != p2) {
        alert("Two passwords don't match!")
    } else {
        alert("Done!")
    }
}
