let inputt = document.getElementById("input") 
let buttons = document.querySelectorAll("button")

let string = ""
let arr = Array.from(buttons)
arr.forEach(button =>{
    button.addEventListener("click" , (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string)
            inputt.value = string
        }else if(e.target.innerHTML == "AC"){
string = ""
inputt.value = string
        }else if (e.target.innerHTML == "DEL"){
string = string.substring(0,string.length-1)
inputt.value = string
        }
       else{ string += e.target.innerHTML;
        inputt.value = string}
    }) 
})

