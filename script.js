// let lenis;

// const initSmoothScrolling = () => {
//     lenis = new Lenis({
//         lerp: 0.085,
//         smoothWheel: true,
//     });

//     lenis.on("scroll", () => ScrollTrigger.update());
//     const scrollFn = (time) => {
//         lenis.raf(time);
//         requestAnimationFrame(scrollFn);
//     };
//     requestAnimationFrame(scrollFn);
// };
// initSmoothScrolling()
function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()
var div =  gsap.utils.toArray(".box")

var tl =  gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        pin:true,
        start:"top top",
        scrub:2,
       end:"350% 0%",
       scroller:"#main"
       
    }
})
.to(".sec:nth-child(1)",{
    y:"-320%",
    
},"a")
// .to(".sec:nth-child(1)",{
//     y:"-80%"
// },"a")
.to(".h1 h1,.p p,.p2 p,.button button",{
    y:"-400%"
    },"a")
//     // .to("#o1",{
//     //     opacity:0,
//     //     delay:-.1
//     // },"a")
//     // .to("#o2",{
//     //     opacity:1,
//     //     delay:-.1
//     // })
// .to(".sec:nth-child(1)",{
//     y:"-160%"
// },"b")
// // .to(".h1 h1,.p p,.p2 p,.button button",{
// //     y:"-200%"
// //     },"b")
// //  .to("#o2",{
// //         opacity:0,
// //         delay:-.1
// //     },"b")
// //     .to("#o3",{
// //         opacity:1,
// //         delay:-.1
// //     })
// .to(".sec:nth-child(1)",{
//     y:"-240%"
// },"c")
// // .to(".h1 h1,.p p,.p2 p,.button button",{
// //     y:"-300%"
// //     },"c")
//     // .to("#o3",{
//     //     opacity:0,
//     //     delay:-.1
//     // },"c")
//     // .to("#o4",{
//     //     opacity:1,
//     //     delay:-.1
//     // })
// .to(".sec:nth-child(1)",{
//     y:"-320%"
// },"d")
// .to(".h1 h1,.p p,.p2 p,.button button",{
//     y:"-400%"
//     },"d")
    // .to("#o4",{
    //     opacity:0,
    //     delay:-.1
    // },"d")
    // .to("#o5",{
    //     opacity:1,
    //     delay:-.1
    // })
