gsap.from("#page1 nav",{
    transform:"translateY(-100%)",
    duration: 1.5,    
})

gsap.from("#search-button, #search-input, .search-container",{
    transform:"translateX(-10%)",
    duration: 1, 
    opacity:0,   
})


gsap.from("#middle img",{
    transform:"translateX(-10%)",
    duration: 2, 
    opacity:0, 
    scale:1.4,
    yoyo:true,
    repeat:-1,
})


gsap.from("#contact",{
    transform:"translateY(-100%)",
    duration: 3, 
    opacity:0.7, 
    scale:1,
    yoyo:true,
    repeat:-1,
})


gsap.from("#buwa, #mumi, #papa, #bby, #ama ",{
    transform:"translateX(-20%)",
    duration: 1, 
    opacity:0.2, 
    scale:1,
    stagger: 0.2,
})

gsap.from("#bu, #mu, #pa, #by, #am ",{
    transform:"translateX(-30%)",
    duration: 1, 
    opacity:0.2, 
    scale:1,
    stagger: 0.2,
})

gsap.from("#man ",{
    transform:"translateY(-20%)",
    duration: 1, 
    opacity:0.3, 
    scale:1,
    stagger: 0.2,
    repeat:-1,
    yoyo:0.5,
})

gsap.from("#theme, #themes",{
    transform:"translateY(-100%)",
    duration: 2, 
    opacity:0.2, 
    scale:1,
    stagger: 0.2,
})