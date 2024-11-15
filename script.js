const btnPlay = document.getElementsByClassName('btn-play')
const btnMute = document.getElementsByClassName('btn-mute')
const videos = document.getElementsByClassName('video-control')

const videoHover = document.querySelectorAll('.video-hover')
const influencers = document.getElementById('fok')

for (let i = 0; i < btnPlay.length; i++) {
    btnPlay[i].addEventListener('click', () => {
        if (videos[i].paused) {
            videos[i].play()
            btnPlay[i].children[0].src = './img/pausebtn.png'
        } else {
            videos[i].pause()
            btnPlay[i].children[0].src = './img/playbtn.png'
        }
    })
}

for (let i = 0; i < btnMute.length; i++) {
    btnMute[i].addEventListener('click', () => {
        if (videos[i].muted) {
            videos[i].muted = false
            btnMute[i].children[0].src = './img/mutebtn.png'
        } else {
            videos[i].muted = true
            btnMute[i].children[0].src = './img/unmutebtn.png'
        }
    })
}

videoHover.forEach(vid => {
    vid.addEventListener('mouseenter', () => {
        vid.play()
        influencers.style.animationPlayState = 'paused'
    })
    vid.addEventListener('mouseleave', () => {
        vid.pause()
        influencers.style.animationPlayState = 'running'
    })
})