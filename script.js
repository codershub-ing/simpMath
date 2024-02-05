//Here in var buttons all needed buttons with id is listed
//With query selector All
var buttons = document.querySelectorAll("#add, #sub, #mult, #div");
//Now here var button is used "for each is to select all from variable"
//and function button is played
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        //here parse int is used beacouse want only integer values from input
        //or to convert ininteger form
        var n1 = parseInt(document.getElementById("n1").value);
        var n2 = parseInt(document.getElementById("n2").value);
        if (this.id == "add") {
            document.getElementById("result").innerText =
                "Addition of " + n1 + " and " + n2 + " is " + (n1 + n2);
        }
        if (this.id == "sub") {
            document.getElementById("result").innerText =
                "Subtraction of " + n1 + " and " + n2 + " is " + (n1 - n2);
        }
        if (this.id == "mult") {
            document.getElementById("result").innerText =
                "Multiplication  of " + n1 + " and " + n2 + " is " + n1 * n2;
        }
        if (this.id == "div") {
            document.getElementById("result").innerText =
                "Division of " + n1 + " and " + n2 + " is " + n1 / n2;
        }
    });
});