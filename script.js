AOS.init({
    delay:100,
    duration:300
});

window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    let opacity = 1 - window.scrollY / 600; // Adjust 400 to control when it fully fades out
    if (opacity >= 0) {
        navbar.style.opacity = opacity;
    } else {
        navbar.style.opacity = 0;
    }
});
$(document).ready(function() {
    // Define images
    var images = [
            "PS3d/!download.jpg",
            "PS3d/download (1).jpg",
            "PS3d/download (2).jpg",
            "PS3d/download (3).jpg",
            "PS3d/download (4).jpg",
            "PS3d/download (5).jpg",
            "PS3d/download (6).jpg",
            "PS3d/download (7).jpg",
            "PS3d/download (8).jpg",
            "PS3d/download (9).jpg",
            "PS3d/download (10).jpg",
            "PS3d/download (11).jpg",
            "PS3d/download (12).jpg",
            "PS3d/download (13).jpg",
            "PS3d/download (14).jpg",
            "PS3d/download (15).jpg",
            "PS3d/download (16).jpg",
            "PS3d/download (17).jpg",
            "PS3d/download (18).jpg",
            "PS3d/download (19).jpg",
            "PS3d/download (20).jpg",
            "PS3d/download (21).jpg",
            "PS3d/download (22).jpg",
            "PS3d/download (23).jpg"
    ];

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj = { curImg: 0 };

    // Create tween
    var tween = gsap.to(obj, {
        curImg: images.length - 1,  // Animate property curImg to number of images
        roundProps: "curImg",  // Only integers so it can be used as an array index
        repeat: 6,  // Repeat 3 times
        immediateRender: true,  // Load first image automatically
        ease: "power1.inOut",  // Show every image the same amount of time
        duration: 0.5,  // Duration of the tween
        onUpdate: function() {
            $("#imagesequence span").hide();
            $("#imagesequence span").eq(obj.curImg).show();
        }
    });

    // Init controller
    var controller = new ScrollMagic.Controller();

    // Build scene
    var scene = new ScrollMagic.Scene({ triggerElement: "#trigger", duration: 500 })
        .setTween(tween)
        .addTo(controller);
});
