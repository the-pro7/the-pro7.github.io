$(document).ready(function() {
    $('button').prop('disabled', true)
    $('button').addClass('animted bounce');
})

// Gsap aimations
const tl = gsap.timeline({defaults : {duration: 0.4}})
tl.from('.attribution', {opacity: 0, y: 100, duration: 2})
tl.from('figure', {opacity: 0, ease: 'bounce', duration: 0.5}, '<1')

