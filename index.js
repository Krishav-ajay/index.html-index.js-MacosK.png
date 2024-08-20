{
    alert(
    "Hello, Welcome to my website. Please press The OK button to continue §§ Hej och välkommen till mitt websida. Var vänlig och tryck på OK knappen"
    );
    var n = Math.random();
    n = n * 100;
    var m = Math.floor(n) + 1;
    alert(m + " is the RNG number")
    var d = confirm("Do you want to do the test again?")
    if (d === true) {
        var n = Math.random();
        n = n * 100;
        m = Math.floor(n) + 1;
        alert(m + " is the RNG number");
    } else {
        alert("Have a nice day !!!");
    }
}
