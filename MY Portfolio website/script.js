var menu = document.querySelector("#menu");
var bg = document.querySelector("#main");

menu.addEventListener("click", function(){
    bg.style.transform = "scale(.8)";
    bg.style.borderRadius = "10px";
    bg.style.border = "1px solid black"
    bg.style.boxShadow = "0 150px -100px rgba(0,0,0,0.2)";
})

menu.addEventListener("dblclick", function(){
    bg.style.transform = "scale(1)";
    bg.style.borderRadius = "0px";
    bg.style.border = "0px solid white"
    bg.style.boxShadow = "0 0px -0px rgba(0,0,0,0)";
})

var tl = gsap.timeline();

tl.from(".navitem",{
    stagger: .3,
    delay: 6,
    duration: 2,
    y:20,
    ease: "Expo.easeInOut",
    opacity: 0
})
tl.from("#smline", {
    width: 0,
    duration: 1,
    ease: "Expo.easeInOut",
}, "-=2")

tl.from(".leftitem", {
    stagger: .3,
    duration: 2,
    y:20,
    ease: "Expo.easeInOut",
    opacity: 0
}, "-=2")

gsap.from(".rightitem", {
    scale: 1.05,
    duration: 3,
    ease: "Expo.easeInOut",
    opacity: 0
}, "-=2")
