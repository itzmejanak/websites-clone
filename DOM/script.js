var a = document.querySelector("#bulb")
var b = document.querySelector("button")
var flag = 0
var h = document.querySelectorAll("h1")




/*to pick id tags*/
document.getElementById('box')


/*to pick class tags*/
document.getElementsByClassName('boxes')








b.addEventListener("click",function(){
    if(flag == 0){
    a.style.backgroundColor = "yellow"
    flag = 1
    } else{
        a.style.backgroundColor = "transparent"
        flag = 0
    }
})

console.log(h)
h.forEach(function(e){
    console.log(e)
})