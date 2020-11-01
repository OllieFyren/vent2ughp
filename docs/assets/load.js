$(document).ready(function(){
    $(".tempDegree").html(document.getElementById("tempRange").value + "°");
    window.lastValue = 24;
    document.getElementById("tempRange").oninput = function(){
        $(".applyButton").fadeIn(500);
        var sliderValue1 = document.getElementById("tempRange");
        sliderValue2 = sliderValue1.value;
        $(".tempDegree").html(sliderValue2 + "°");
        if (sliderValue2 == 20){
            document.getElementById("one").style.transform = "rotate(45deg)";
            document.getElementById("two").style.transform = "rotate(45deg)";
            document.getElementById("three").style.transform = "rotate(45deg)";
            document.getElementById("four").style.transform = "rotate(45deg)";
        }
        else if (sliderValue2 == 21){
            document.getElementById("one").style.transform = "rotate(9deg)";
            document.getElementById("two").style.transform = "rotate(45deg)";
            document.getElementById("three").style.transform = "rotate(45deg)";
            document.getElementById("four").style.transform = "rotate(45deg)";
        }
        else if (sliderValue2 == 22){
            if (lastValue == 23){
                document.getElementById("one").style.transitionDelay = "0.1s";
            }
            else {
                document.getElementById("one").style.transitionDelay = "0.0s";
            }
            document.getElementById("one").style.transform = "rotate(-27deg)";
            document.getElementById("two").style.transform = "rotate(45deg)";
            document.getElementById("three").style.transform = "rotate(45deg)";
            document.getElementById("four").style.transform = "rotate(45deg)";

        }
        else if (sliderValue2 == 23){
            if (lastValue == 22){
                document.getElementById("two").style.transitionDelay = "0.1s";
            }
            else {
                document.getElementById("two").style.transitionDelay = "0.0s";
            }
            document.getElementById("one").style.transform = "rotate(-45deg)";
            document.getElementById("two").style.transform = "rotate(27deg)";
            document.getElementById("three").style.transform = "rotate(45deg)";
            document.getElementById("four").style.transform = "rotate(45deg)";
        }
        else if (sliderValue2 == 24){
            document.getElementById("one").style.transform = "rotate(-45deg)";
            document.getElementById("two").style.transform = "rotate(-9deg)";
            document.getElementById("three").style.transform = "rotate(45deg)";
            document.getElementById("four").style.transform = "rotate(45deg)";
        }
        else if (sliderValue2 == 25){
            document.getElementById("one").style.transform = "rotate(-45deg)";
            document.getElementById("two").style.transform = "rotate(-45deg)";
            document.getElementById("three").style.transform = "rotate(45deg)";
            document.getElementById("four").style.transform = "rotate(45deg)";
        }
        else if (sliderValue2 == 26){
            document.getElementById("one").style.transform = "rotate(-45deg)";
            document.getElementById("two").style.transform = "rotate(-45deg)";
            document.getElementById("three").style.transform = "rotate(9deg)";
            document.getElementById("four").style.transform = "rotate(45deg)";
        }
        else if (sliderValue2 == 27){
            document.getElementById("one").style.transform = "rotate(-45deg)";
            document.getElementById("two").style.transform = "rotate(-45deg)";
            document.getElementById("three").style.transform = "rotate(-27deg)";
            document.getElementById("four").style.transform = "rotate(45deg)";
            document.getElementById("indexFour").style.zIndex = "8";
        }
        else if (sliderValue2 == 28){
            document.getElementById("one").style.transform = "rotate(-45deg)";
            document.getElementById("two").style.transform = "rotate(-45deg)";
            document.getElementById("three").style.transform = "rotate(-45deg)";
            document.getElementById("four").style.transform = "rotate(27deg)";
            document.getElementById("indexFour").style.zIndex = "4";
        }
        else if (sliderValue2 == 29){
            document.getElementById("one").style.transform = "rotate(-45deg)";
            document.getElementById("two").style.transform = "rotate(-45deg)";
            document.getElementById("three").style.transform = "rotate(-45deg)";
            document.getElementById("four").style.transform = "rotate(-9deg)";
        }
        else {
            document.getElementById("one").style.transform = "rotate(-45deg)";
            document.getElementById("two").style.transform = "rotate(-45deg)";
            document.getElementById("three").style.transform = "rotate(-45deg)";
            document.getElementById("four").style.transform = "rotate(-45deg)";
        }
        lastValue = sliderValue2
    };
})