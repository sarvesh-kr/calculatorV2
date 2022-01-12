// Copyright protected content
inputValue = {};
equation=[''];
c=0;
result=0;

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);
let calculator = () => {
    inputValue = window.event.target.value;
    if (inputValue == '\+' || inputValue == '\-' || inputValue == '\*' || inputValue == '\/' || inputValue =='\^') {
        var snd = new Audio("sound/buttonSound/clickSound.wav");
        snd.play();
        c++;
        equation[c] = '';
        equation[c] += inputValue;
        c++;
        equation[c] = '';
    } else {
        if (inputValue == "clear") {
            var snd = new Audio("sound/buttonSound/clickSound.wav");
            snd.play();
            document.getElementById("outputScreen").value='';
            equation = [''];
            c= 0 ;
            result = 0;
        } else {
            var snd = new Audio("sound/buttonSound/clickSound.wav");
            snd.play();
            equation[c] += inputValue;
        }
    }
}

//equation has the value
let display = () => {
    var resultInternal=0;
    var snd = new Audio("sound/buttonSound/clickSound.wav");
    snd.play();
    for (let star = 0; star < equation.length; star++) {
        result=equation[star-1];
        if (equation[star] == '\^') {
            for (let index = 1; index < parseInt(equation[star+1]); index++) {
                result=result*equation[star-1];
            }
            equation[star-1]=result;
            equation.splice(star,2);
            star=0;
        }
    }
    for (let star = 0; star < equation.length; star++) {
        if (equation[star] == '\/') {
            result = parseFloat(equation[star-1]);
            equation[star-1] = result / parseFloat(equation[star+1]);
            result=equation[star-1];
            equation.splice(star,2);
            star=0;
        }
    }
    for (let star = 0; star < equation.length; star++) {
        if (equation[star] == '\*') {
            result = parseFloat(equation[star-1]);
            equation[star-1] = result * parseFloat(equation[star+1]);
            result=equation[star-1];
            equation.splice(star,2);
            star=0;
        }
    }
    for (let star = 0; star < equation.length; star++) {
        if (equation[star] == '\+') {
            result = parseFloat(equation[star-1]);
            equation[star-1] = result + parseFloat(equation[star+1]);
            result=equation[star-1];
            equation.splice(star,2);
            star=0;
        }
    }
    for (let star = 0; star < equation.length; star++) {
        if (equation[star] == '\-') {
            result = parseFloat(equation[star-1]);
            equation[star-1] = result - parseFloat(equation[star+1]);
            result=equation[star-1];
            equation.splice(star,2);
            star=0;
        }
    }

    equation[0]=result;
    c=0;
    document.getElementById("outputScreen").value = result;
    if(isNaN(result)) {
        document.getElementById("outputScreen").value = `You're smart enough!`;
    }
}
