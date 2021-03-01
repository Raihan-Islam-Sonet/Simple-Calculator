var inputLabelm= document.getElementById('inputLabel');

function pushBtn(obj){
    var pushed = obj.innerHTML;
    if (pushed == '='){
        inputLabelm.innerHTML = eval(inputLabelm.innerHTML);
    }
    else if (pushed == 'AC'){
        inputLabelm.innerHTML ='0'
    }
    else{
        if (inputLabelm.innerHTML == '0'){
            inputLabelm.innerHTML = pushed;
        }
        else {
            if (inputLabelm.innerHTML == '0'){
                inputLabelm.innerHTML = pushed;
            } 
            else{
                inputLabelm.innerHTML +=pushed;
            }
        }
    }
}