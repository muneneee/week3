$(document).ready(function() {
    $("#one").click(function(){
        $(".design").toggle(100);
        $(".click1").toggle(100);
    });
    $("#two").click(function(){
        $(".development").toggle(100);
        $(".click2").toggle(100);
    });
    $("#three").click(function(){
        $(".management").toggle(100);
        $(".click3").toggle(100);
    });
})

function validation() {
    var name = document.getElementById("names").value;
    var email = document.getElementById("emails").value;

    if (name == "") {
        alert("required");
        return false;
    }
    else if (email == "") {
        alert("required");
        return false
    }
    else {
        alert("cheers " + name + " ,we will get back to you");
    }
}
