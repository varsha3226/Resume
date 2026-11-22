
document.getElementById("myForm")
.addEventListener("submit", function(e) {
    e.preventDefault();

    let n = document.getElementById("name").value;
    let m = document.getElementById("email").value;

    if (n == "" || m == "") {
        document.getElementById("msg").innerHTML =
            "Fill all fields";
    } else {
        document.getElementById("msg").innerHTML =
            "Submitted Successfully";
    }
});
