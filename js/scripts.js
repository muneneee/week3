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
    $(".first").hover(function(){
        $("#1").toggle()
    })
    $(".second").hover(function(){
        $("#2").toggle()
    })
    $(".third").hover(function(){
        $("#3").toggle()
    })
    $(".fourth").hover(function(){
        $("#4").toggle()
    })
    $(".fifth").hover(function(){
        $("#5").toggle()
    })
    $(".sixth").hover(function(){
        $("#6").toggle()
    })
    $(".seventh").hover(function(){
        $("#7").toggle()
    })
    $(".eighth").hover(function(){
        $("#8").toggle()
    })
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



