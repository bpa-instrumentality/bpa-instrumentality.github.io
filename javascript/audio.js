function playAudio(btn, source) {
    source = document.getElementById(source)
    btn.classList.toggle('activePlay')
    // console.log(btn, source)
    document.querySelectorAll('.playBtn').forEach((item) => {
        item.innerHTML = `<i class="fa-solid fa-play"></i>`
        console.log(item)
        if (!item.id == btn.id) {
            item.classList.remove('activePlay')
            console.log(item)
        }
    })
    document.querySelectorAll('.audio').forEach((item) => {
        item.pause()
    })
    if (btn.classList.contains('activePlay')) {
        console.log('yes')
        btn.innerHTML = `<i class="fa-solid fa-pause"></i>`
        source.play()
    }
    else {
        console.log('no')
        source.pause()
    }
}