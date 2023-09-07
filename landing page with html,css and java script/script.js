
    gsap.to(".imagecontainer",{
        width:"100%",
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 2,
        repeat: -1,
     
     })

     gsap.to(".text h1",{
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 2,
        repeat: -1,
        top:0,
     
     })
     gsap.to(".text h1",{
        delay: 2,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 2,
        repeat: -1,
        top: "-100%",
     
     })
   


     function time(){
     var a = 0
     setInterval(function(){
      a = a + Math.floor(Math.random()*15)
      if(a<100){
         document.querySelector("#loader h1").innerHTML = a+"%"
      }else{
         a=100
         document.querySelector("#loader h1").innerHTML = a+"%"
      }

     },150)
  }
         
  
 gsap.to("#loader h1",{
   scale:1.4,
   delay:1.5,
   duration:1.5,
   onStart:time()
 })
 

 gsap.to("#loader",{
   top:"-50vh",
   opacity:0,
   delay:2.5,
   duration:1.5,
})
     