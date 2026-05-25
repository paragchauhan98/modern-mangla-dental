
gsap.registerPlugin(SplitText);

let split, animation;

 split = new SplitText(".header-banner-main-heading", {
  type: "chars"
});
  animation && animation.revert();
  animation = gsap.from(split.chars, {
    y: 100,
    opacity: 0,
    duration: 0.2, 
    ease: "power4",
    stagger: 0.02
  })

  gsap.timeline()

gsap.from(".header-banner", {
  scale: 1.2,
  duration: .5,
  ease: "power2.out"
});




// const nav = document.querySelector(".header-nav-right");

// /* smooth liquid motion on scroll */
// gsap.to(nav, {
//   scrollTrigger: {
//     trigger: document.body,
//     start: "top top",
//     end: "500 top",
//     scrub: 1.5
//   },

//   scale: 0.92,
//   y: 8,
//   rotateX: 2,
//   rotateY: -2,
//   ease: "none"
// });

// /* subtle breathing distortion (Vision Pro feel) */
// gsap.to(nav, {
//   duration: 3,
//   repeat: -1,
//   yoyo: true,

//   filter: "url(#glass-distortion) blur(0px)",
//   ease: "sine.inOut"
// });


gsap.to(".header-bg", {
  yPercent: -20,
  scaleX: 1.05,
  ease: "none",
  scrollTrigger: {
    trigger: ".header-banner",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});


gsap.to(".header-banner-cta button::before", {
  width: "100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".header-banner",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".header-banner-cta button", {
  "--fill": "100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".header-banner",
    start: "top -4%",
    end: "+=80%",
    scrub: true
  }
});

gsap.from(".header-banner-sub-heading", {
  y: 20,
  opacity: 0,
  filter: "blur(6px)",
  duration: 0.5,
  ease: "power2.out",
  delay: 0.6
});

gsap.from(".header-banner-cta", {
  y: 15,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
  delay: 0.8
});

// gsap.utils.toArray('.services-info-card').forEach((card) => {

//   ScrollTrigger.create({
//     trigger: card,
//     start: "top 85%",

//     onEnter: () => {
//       gsap.fromTo(card,
//         { y: 80, opacity: 0, scale: 0.95 },
//         { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
//       );
//     },

//     onLeaveBack: () => {
//       gsap.set(card, {
//         y: 80,
//         opacity: 0,
//         scale: 0.95
//       });
//     }
//   });

// });
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.services-info-card').forEach((card, index) => {

  gsap.fromTo(card,
    {
      y: 80,
      opacity: 0,
      scale: 0.95
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: "power3.out",
      delay: index * 0.05,
      scrollTrigger: {
        trigger: card,

        // 🔥 CRITICAL FIX
        start: "top 100%",   // enters only when truly coming in
        end: "bottom 10%",  // leaves only when fully gone

        toggleActions: "play none none reset"
      }
    }
  );

});

// gsap.utils.toArray('.services-info').forEach((section) => {
  
//   const cards = section.querySelectorAll('.services-info-card');

//   gsap.to(cards, {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     duration: 0.8,
//     ease: "power3.out",
//     stagger: {
//       each: 0.12,
//       from: "start"
//     },
//     scrollTrigger: {
//       trigger: section,
//       start: "top 80%",
//       toggleActions: "play reverse play reverse"
//     }
//   });

// });

const nav = document.querySelector(".header-nav-right");
// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY;

//   if (scrollY > 200) {
//     nav.classList.add("light");
//   } else {
//     nav.classList.remove("light");
//   }
// });
// let currentMode = "dark";
// let timeout = null;

// function detectMode() {
//   const rect = nav.getBoundingClientRect();
//   const x = rect.left + rect.width / 2;
//   const y = rect.top + rect.height / 2;

//   const element = document.elementFromPoint(x, y);
//   if (!element) return;

//   const bg = window.getComputedStyle(element).backgroundColor;

//   const match = bg.match(/\d+/g);
//   if (!match) return;

//   const [r, g, b] = match.map(Number);
//   const brightness = (r + g + b) / 3;

//   let newMode = brightness > 180 ? "light" : "dark";

//   // 🔥 prevent flicker (only change if stable for 150ms)
//   clearTimeout(timeout);

//   timeout = setTimeout(() => {
//     if (newMode !== currentMode) {
//       currentMode = newMode;

//       nav.classList.toggle("light", currentMode === "light");
//     }
//   }, 150);
// }

// window.addEventListener("scroll", detectMode, { passive: true });
// window.addEventListener("resize", detectMode);

gsap.to(nav, {
  y: -2,
  scale: 0.985,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});