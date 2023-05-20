let slider = tns ({
    containter: '.slider-container',
    items: 1,
    gutter: 10,
    autplay: true,
    mousedrag:true,
    controls:false,
    nav:false,
    autplayButtonOutput:false,
    responsive: {
        640: {
            items:2,
        },
        768: {
            items: 3,
        }
    }
})
