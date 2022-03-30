$('.owl-carousel').owlCarousel({
    center: true,
    loop:true,
    margin:5,
    dots:true,
    responsive:{
        0:{
            items: 1
        },
        390: {
            items: 1
        },
        1080: {
            items: 3
        }
    }
})

particlesJS.load('particles-js', './particles.json', function() {
});

particlesJS.load('particles-js2', './particles.json', function() {
});