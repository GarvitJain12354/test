var div =  gsap.utils.toArray(".box")
var tl =  gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        pin:true,
        start:"top top",
        markers:true,
        scrub:0.5,
       end:"200% 0%"
    }
})
.to(".sec:nth-child(1)",{
    y:"-100%"
},"a")
.to(".h1 h1",{
    y:"-100%"
    },"a")
    .to("#o1",{
        opacity:0,
        delay:-.1
    },"a")
.to(".sec:nth-child(1)",{
    y:"-200%"
},"b")
.to(".h1 h1",{
    y:"-200%"
    },"b")
 
    .to("#o2",{
        opacity:0,
        delay:-.1
    },"b")
.to(".sec:nth-child(1)",{
    y:"-300%"
},"c")
.to(".h1 h1",{
    y:"-300%"
    },"c")
    .to("#o3",{
        opacity:0,
        delay:-.1
    },"c")
.to(".sec:nth-child(1)",{
    y:"-400%"
},"d")
.to(".h1 h1",{
    y:"-400%"
    },"d")
    .to("#o4",{
        opacity:0,
        delay:-.1
    },"d")

console.log("-" + 100 * div.length - 100  +  "%"  );