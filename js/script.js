var controller = new ScrollMagic.Controller();

const brush = false;
const lipstick = false;


if (brush){
//brush movement
    var tween = new TimelineMax({delay: 1})
        .add(TweenMax.to($("#brush"), 0.75, {css:{rotation: -35, x: "20%", opacity: 1}, ease:Power1.easeInOut}))
        .add(TweenMax.to($("#brush"), 0.75, {css:{rotation: -10, x: "30%"}, ease:Power1.easeInOut}))
        .add(TweenMax.to($("#brush"), 0.75, {css:{rotation: -35, x: "40%"}, ease:Power1.easeInOut}))
        .add(TweenMax.to($("#brush"), 0.75, {css:{rotation: -10, x: "40%", opacity: 0}, ease:Power1.easeInOut}))
        .add(TweenMax.to($("#brush"), 0.75, {css:{rotation: -35, x: "60%", opacity: 0}, ease:Power1.easeInOut}));

    new ScrollMagic.Scene({
        duration: "150%"
        })
        .setTween(tween)
        .setPin('#brush')
        .addTo(controller);
}


if (lipstick){
//lipstick movement
    var lipstickTeen = new TimelineMax({delay: 2})
        .add(TweenMax.to($("#lipstick"), 0.75, {css:{rotation: -25, opacity: 1}, ease:Power1.easeInOut}))
        .add(TweenMax.to($("#lipstick"), 0.75, {css:{rotation: 0}, ease:Power1.easeInOut}))
        .add(TweenMax.to($("#lipstick"), 0.75, {css:{rotation: 25,  opacity: 0}, ease:Power1.easeInOut}));


    new ScrollMagic.Scene({
        duration: "100%"
        })
        .setTween(lipstickTeen)
        .setPin('#lipstick')
        .addTo(controller);
}


//Section change
var wipeAnimation = new TimelineMax()
    .fromTo(".section--pos", 1, {x:  "-100%"}, {x: "0%", backgroundColor: "#e7ecef", ease: Linear.easeNone});

new ScrollMagic.Scene({
        triggerElement: "#container",
        triggerHook: "onLeave",
        duration: "150%"
    })
    .setPin("#container")
    .setTween(wipeAnimation)
    .addTo(controller);


//navigation animation  
new ScrollMagic.Scene({offset: 700})
    .setClassToggle("#navigation", "navigation__pos")
    .addTo(controller);



//delayed--appearance
var revealElements = document.getElementsByClassName("delayed--appearance");
for (var i=0; i<revealElements.length; i++) { 
    console.log(revealElements[i])
    new ScrollMagic.Scene({
        triggerElement: revealElements[i],
        offset: 60,												
        triggerHook: 0.9
    })
    .setClassToggle(revealElements[i], "visible")
    .addTo(controller);
}