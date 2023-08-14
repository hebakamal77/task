var input = document.getElementById("input");
var btn = document.getElementById("btn");
var msg = document.getElementById("msg");



btn.onclick = function()
{
    var inputvalue = input.value;

    if(inputvalue != ""){

        msg.innerHTML += inputvalue +"<br/>";

        input.value = ""
    }
    else{
        alert("must enter message")
    }
}