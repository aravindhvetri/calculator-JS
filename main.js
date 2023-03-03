let input = document.getElementById("inp");

function display(num){
    input.value += num;
}

function cleared(){
    input.value ="";
}

function dlt(){
    input.value = input.value.slice(0, -1);
}

function equal(){
    if(input.value == ""){
        alert("invalid");
    }
    else{
        input.value = eval(input.value);
    }
}