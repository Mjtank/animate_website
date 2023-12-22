function locomotivescroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
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
locomotivescroll();
gsap.to("#navpart1 svg", {
    // delay:0.5,
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -50%",
      scrub: 1,
      smooth:true
    },
   
    
})
gsap.to("#navpart2 #links", {
    // delay:0.5,
    transform: "translateY(-500%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -50%",
      scrub: 1,
      smooth:true
    },
   
    
})



function videoanimation() {
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");

    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    });
    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    });
    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x,
            top: dets.y,
            

        })
    });
}
videoanimation();
// --------------------------------

function load(){
    gsap.from("#page1 h1", {
        y:100,
        delay:0.5,
        stagger:0.2,
        opacity:0
    })
    gsap.from("#page1 #video-container", {
        scale:0.8,
        delay:1.1,
        // stagger:0.2,
        opacity:0,
        duration:0.6
    })
}
load();
// -------------------------------------
var body = document.querySelector(".body");
body.addEventListener("mousemove",function(detsi) {
    gsap.to("#cursor",{
        scale:1,
        left:detsi.x,
        top:detsi.y,
        delay:-0.5
    })
})
// =====================================
function cursorani(){
    // document.querySelector("#page3").addEventListener("mousemove",function(){
//     gsap.to("#cursor",{
//         scale:0,
//         // opacity:0
//     })
// })
document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener('mouseenter',function() {
        gsap.to("#cursor",{
            transform:"translate(-50%,-50%) scale(1)",
            opacity:1
        })
    })
    elem.addEventListener('mouseleave',function() {
        gsap.to("#cursor",{
            transform:"translate(-50%,-50%) scale(0)"
        })
    })
})
}
cursorani();




