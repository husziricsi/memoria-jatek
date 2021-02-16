$(function () {
//   $("#kezd").click(init);
    $("#kezd").click("click", init);
});

function init() {
    $("#jatekter").empty();
    for (var i = 0; i < 32; i++) {
        $("#jatekter").append("<div>");
        $("#jatekter div").eq(i).append("<img>");
        $("#jatekter div").eq(i).attr({"id": (i + 1)});
        $("#jatekter img").eq(i).attr({"src": "kartya/hatlap.jpg", "alt": "kep", "id": (i + 1)});


    }

    $("#jatekter div").click(lapcsere);
    $("#jatekter div ").hover(function () {
        $(this).addClass("kartya");
    },
            function () {
                $(this).removeClass("kartya");
            });
}

function lapcsere() {
    var i = $(this).attr("id");
    var fajlnev = "kartya/" + (i) + ".png";
    console.log(fajlnev);
    $("#jatekter img").eq(i - 1).attr({"src": fajlnev, "alt": "kartyalap"});
}

