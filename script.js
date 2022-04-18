'use strict;'

//tratamiento interacciñon menú prinpcipal

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle("change")
    })
});
document.querySelectorAll(".wrapper").forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.target').forEach((item) => {
            item.classList.remove("change")

        })
    })
})

//acceder a todos los elementos video
const videos = document.querySelectorAll('.video');


//alternativa I

// function handleVideos() {

//     videos.forEach((video) => {
//         video.addEventListener("mouseover", function (e) {
//             video.play()

//         });
//         video.addEventListener("mouseout", function (e) {
//             video.pause();
//         })


//     });
// }
//alternativa II

videos.forEach((video) => {
    video.addEventListener("mouseover", function (e) {
        video.play()

    });
    video.addEventListener("mouseout", function (e) {
        video.pause();
    })


});

