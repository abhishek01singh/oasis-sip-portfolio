// function locojs(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });










// // tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
// //   .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
// //   .to(".purple", {backgroundColor: "#28a92b"}, 0);



// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }
// locojs()



var btn = document.querySelector("button")
var h1 = document.querySelector("#starting ")
// var h3 = document.querySelector("#starting h3")
// var img = document.querySelector("#starting img")
var goinside = document.querySelector("#pageinner")


btn.addEventListener("click",function(){
    h1.style.display = "none"
    // h1.style.display = "none"
    // h3.style.display = "none"
    // btn.style.display = "none"
    goinside.style.display = "initial"
})

var tl = gsap.timeline()

// tl.from("header",{
//     transform:"translateY(-50vw)",
//     stagger: 1,
//     scale:0,
//     opacaty: 0,
//     duration: 1,
//     // delay: 0.8,
//     scrollTrigger: {
//         scroller:"body",
//         trigger:"header",
//         start: "top 0%",
//         end: "top -.1%",
//         // markers: true,
//         scrub:2,
        
     

//     }

// })

tl.from("#about",{
    transform:"translateX(-100vw)",
    opacaty: 0,
    duration: 5,
    scrollTrigger: {
        scroller:"body",
        trigger:"#about",
        start: "top 0%",
        end: "top -3%",
        // markers: true,
        scrub:2,
   
     

    }



})
tl.from("#projects",{
    // transform:"translateX(-100vw)",
    opacaty: 0,
    scale:0,
    duration: 1,
    scrollTrigger: {
        scroller:"body",
        trigger:"#projects",
        start: "top 0%",
        end: "top -30%",
        // markers: true,
        scrub:2,
   
     

    }



})

tl.from("#skill",{
    transform:"translateX(-100vw)",
    opacaty: 0,
    duration: 1,
    scrollTrigger: {
        trigger:"#skill",
        scroller:"body",
    
        start: "top 0%",
        end: "top -210%",
        // markers: true,
        scrub:1,
       
   
     

    }



})
tl.from("#Experince",{
    transform:"translateX(100vw)",
    opacaty: 0,
    // duration: 1,
    scrollTrigger: {
        scroller:"body",
        trigger:"#Experince",
        start: "top 0%",
        end: "top -330%",
        // markers: true,
        scrub:1,
   
     

    }



})

tl.from("#contact",{
    transform:"translateX(-100vw)",
    opacaty: 0,
    duration: 1,
    scrollTrigger: {
        scroller:"body",
        trigger:"#contact",
        start: "top 0%",
        end: "top -330%",
        // markers: true,
        scrub:1,
   
     

    }
})


tl.from("footer",{
    // transform:"translateX(-100vw)",
    opacaty: 0,
    scale:0,
    duration: 1,
    scrollTrigger: {
        scroller:"body",
        trigger:"footer",
        start: "top 0%",
        end: "top -390%",
        // markers: true,
        scrub:2,
   
     

    }
})


