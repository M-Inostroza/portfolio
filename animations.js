
//-----PLANET WORKS-----//

// Planet animation
var planet_works = bodymovin.loadAnimation({
    container: document.getElementById("planet-works"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/planet_works.json'
})

// Container element
const frame_quad_element = document.getElementById("frame-planet-works");

// Frame quad animation
var frame_quad_anim = bodymovin.loadAnimation({
    container: frame_quad_element,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/anims/frame_quad_works_in.json'
})

// PLAY IN
frame_quad_element.addEventListener('mouseenter', (e) => {
    frame_quad_anim.setDirection(1)
    frame_quad_anim.play()
    setTimeout(() => {
        window_works.style.opacity = 1;
        window_works_anim.play()
    }, 350);
})

// PLAY OUT
frame_quad_element.addEventListener('mouseleave', (e) => {
    frame_quad_anim.setDirection(-1)
    frame_quad_anim.play()
    window_works.style.opacity = 0;
})

// Floating window element
const window_works = document.getElementById("frame-floating-window");

// Floating window animation
var window_works_anim = bodymovin.loadAnimation({
    container: window_works,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '/anims/frame_floating_window.json'
})

window_works_anim.setSpeed(0.7);



//-----PLANET SKILLS-----//