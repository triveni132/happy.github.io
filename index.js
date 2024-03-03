var i = 0;
var txt1 =
    "  <<              Happy birthday to the person I love the most. You are the reason of my happiness in my life and I can't thank you enough for it. You are a very good person, I am very happy to have you in my life. I wish that we are always together.";
var speed = 55;
typeWriter();

function typeWriter() {
    if (i < txt1.length) {
        if (txt1.charAt(i) == "<")
            document.getElementById("text1").innerHTML += "</br>";
        else if (txt1.charAt(i) == ">")
            document.getElementById("text1").innerHTML = "";
        else if (txt1.charAt(i) == "|") {
            $(".bg_heart").css("background-image", "')");
        } else document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}