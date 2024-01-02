function skillsMember()  {
    var x = document.getElementById("skillsMember");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("skillsMember").style.display = "block";
        document.getElementById("skillsMember").style.marginLeft = "auto";
        document.getElementById("skillsMember").style.marginRight = "auto";
        document.getElementById("skillsMember").style.width = "50%";
    } else {
        x.style.display = "none";
    }
}