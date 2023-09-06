gsap.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"500",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top 0",
        end:"top -200%",
        scrub:1,
        pin:true,

    }
    
})
var tl = gsap.timeline()

function time(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*15)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        }else{
            a = 100
            document.querySelector("#loader h1").innerHTML = a+"%"

        }
        

    },150)
}
 tl.to("#loader h1",{
    scale:1.4,
    delay:0.5,
    duration:1,
    onStart:time()
 })

tl.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:1.5,
})

gsap.from("nav h2",{
    y: 100,
    stagger:0.2,
    delay:1.8,
    duration:1.7,
    opacity:0,
})

gsap.from("nav h3",{
    y: -100,
    stagger:0.2,
    delay:1.8,
    duration:1.7,
    opacity:0,
})