// Styling import
import '../scss/style.scss';

// GSAP Imports
import { gsap } from "gsap";
    
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
  
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);

function query(elem) {
  return document.querySelector(elem)
}
function queryAll(elem) {
  return document.querySelectorAll(elem)
}
function getId(elem) {
  return document.getElementById(elem)
}

// Words and letters constants
const signature = getId('signature-svg'),
      title = getId('title'),
      title1 = getId('animate-1-a'),
      title2 = getId('animate-2-n'),
      title3 = getId('animate-3-i'),
      title4 = getId('animate-4-m'),
      title5 = getId('animate-5-a'),
      title6 = getId('animate-6-t'),
      title7 = getId('animate-7-e'),
      tagline = getId('tagline'),
      taglineBring = getId('tagline-bring'),
      taglineBring1 = getId('bring-1-b'),
      taglineBring2 = getId('bring-2-r'),
      taglineBring3 = getId('bring-3-i'),
      taglineBring4 = getId('bring-4-n'),
      taglineBring5 = getId('bring-5-g'),
      taglineCode = getId('tagline-code'),
      taglineCode1 = getId('code-1-c'),
      taglineCode2 = getId('code-2-o'),
      taglineCode3 = getId('code-3-d'),
      taglineCode4 = getId('code-4-e'),
      taglineTo = getId('tagline-to'),
      taglineTo1 = getId('to-1-t'),
      taglineTo2 = getId('to-2-o'),
      taglineLife = getId('tagline-life'),
      taglineLife1 = getId('life-1-l'),
      taglineLife2 = getId('life-2-i'),
      taglineLife3 = getId('life-3-f'),
      taglineLife4 = getId('life-4-e');


window.addEventListener('DOMContentLoaded', () => {

  // Get all hover trigger rectangles
  const hoverTriggers = document.querySelectorAll('.hover-trigger');
    
  // Add event listeners to each rectangle
  hoverTriggers.forEach(trigger => {
    // Find the path within the same group
    const group = trigger.parentElement;
    const paths = group.querySelectorAll('path');
    
    // Add hover event listeners
    trigger.addEventListener('mouseenter', () => {
      paths.forEach(path => path.classList.add('hover-gold'));
    });
    
    trigger.addEventListener('mouseleave', () => {
      paths.forEach(path => path.classList.remove('hover-gold'));
    });
    
    // Make sure the rectangle is visible to mouse events
    trigger.style.cursor = 'pointer';
    trigger.style.pointerEvents = 'all';
  });

  // GSAP animation
  const title_tl = gsap.timeline();
  title_tl.fromTo(title,
    {
      transformOrigin: "center bottom" ,
      scale: 0.5,
      opacity: 0
    },
    {
      transformOrigin: "center bottom",
      scale: 1,
      opacity: 1,
      duration: 4
    }
  )
  .to(title4,
    {
      transformOrigin: "center bottom",
      duration: 2.5,
      scaleX: 1.1,
      scaleY: .5,
      ease: "elastic.out(1,0.3)" 
    }, "-=3"
  )
  .to(title3,
    {
      transformOrigin: "50% 25%",
      rotate: 28,
      duration: 1,
      ease: "power1.in"
    }, "-=1.5"
  )
  .to(title3,
    {
      rotate: -360,
      duration: 5,
      ease: "elastic.out(1,0.3)"
    }, "-=.5"
  )
  .to(title4,
    {
      transformOrigin: "right bottom", 
      xPercent: -5, rotate: 35, scaleY: 1.3, scaleX: .8,
      ease: CustomEase.create("custom", "M0,0 C0,0.996 0.492,1 1,1 "),
      duration: .75
    }, "-=4.9"
  )
  .to(title4,
    {
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      ease: "bounce",
      duration: 2
    }, "-=4.15" 
  );

  const easeInOut = `CustomEase.create("custom", "M0,0 C0.7,0 0.598,1 1,1 "))`;
  const tagline_tl = gsap.timeline();
  gsap.set(tagline, {
    transformOrigin: "center top",
    scaleY: .5,
    opacity: 0,
    y: -2.5
  });
  tagline_tl
    .to(tagline,
      {
        opacity: 1,
        duration: 1,
        ease: "power1"
      }
    )
    .to(tagline,
      {
        transformOrigin: "center top",
        y: 0,
        scaleY: 1,
        duration: 1,
        ease: "elastic.out(1,0.3)"
      }, "<"
    );
  
  const master_tl = gsap.timeline(
    {
      delay: .5,
      repeat: -1,
      repeatDelay: 2
    }
  );
  master_tl.add(title_tl)
           .add(tagline_tl, "-=3.5");


});



