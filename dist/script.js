



// function pageTransition(){
//     let t1 = gsap.timeline();

//     t1.to(".transition", {
//         duration: 1,
//         scaleY: 1,
//         transformOrigin: "bottom",
//         ease: "power4.inOut",
//     });

//     t1.to(".transition", {
//         duration: 1,
//         scaleY: 0,
//         transformOrigin: "top",
//         ease: "power4.inOut",
//         delay: 0.2,
//     });
// }

// function contentAnimation(){
//     let t1 = gsap.timeline();
//     t1.to("h1", {
//         top: 0,
//         duration: 1,
//         ease: "power3.inOut",
//         delay: 0.75,
//     });
// }

// function delay(n){
//     n = n || 0;
//     return new Promise((done) => {
//         setTimeout(() => {
//             done();
//         }, n);
//     });
// }

// barba.init({
//     sync: true,
//     transition: [
//         {
//             async leave(data){
//                 const done = this.async();

//                 pageTransition();
//                 await delay(1000);
//                 done();
//             },

//             async enter(data){
//                 contentAnimation();
//             },

//             async once(data){
//                 contentAnimation();
//             }
//         },
//     ],
// })