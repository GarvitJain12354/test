let lenis;

const initSmoothScrolling = () => {
    lenis = new Lenis({
        lerp: 0.085,
        smoothWheel: true,
    });

    lenis.on("scroll", () => ScrollTrigger.update());
    const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);
};

var div =  gsap.utils.toArray(".box")

var tl =  gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        pin:true,
        start:"top top",
        scrub:0.5,
       end:"180% 0%",
       
    }
})
.to(".sec:nth-child(1)",{
    y:"-80%"
},"a")
.to(".h1 h1,.p p,.p2 p,.button button",{
    y:"-100%"
    },"a")
    .to("#o1",{
        opacity:0,
        delay:-.1
    },"a")
    .to("#o2",{
        opacity:1,
        delay:-.1
    })
.to(".sec:nth-child(1)",{
    y:"-160%"
},"b")
.to(".h1 h1,.p p,.p2 p,.button button",{
    y:"-200%"
    },"b")
 .to("#o2",{
        opacity:0,
        delay:-.1
    },"b")
    .to("#o3",{
        opacity:1,
        delay:-.1
    })
.to(".sec:nth-child(1)",{
    y:"-240%"
},"c")
.to(".h1 h1,.p p,.p2 p,.button button",{
    y:"-300%"
    },"c")
    .to("#o3",{
        opacity:0,
        delay:-.1
    },"c")
    .to("#o4",{
        opacity:1,
        delay:-.1
    })
.to(".sec:nth-child(1)",{
    y:"-320%"
},"d")
.to(".h1 h1,.p p,.p2 p,.button button",{
    y:"-400%"
    },"d")
    .to("#o4",{
        opacity:0,
        delay:-.1
    },"d")
    .to("#o5",{
        opacity:1,
        delay:-.1
    })
