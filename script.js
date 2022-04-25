function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

let mouseDown = false

document.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('piano-key')) {
        mouseDown = true
        playAudio('assets/audio/' + event.target.dataset.noteOrigin + '.mp3')
        event.target.classList.add('piano-key-active')
    }
})

document.addEventListener('mouseup', (event) => {
    const active = document.querySelector('.piano-key-active')
    if (active) {
        active.classList.remove('piano-key-active')
    }
    mouseDown = false
})

document.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('piano-key') && mouseDown) {
        playAudio('assets/audio/' + event.target.dataset.noteOrigin + '.mp3')
        event.target.classList.add('piano-key-active')
    }
})

document.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('piano-key') && mouseDown) {
        event.target.classList.remove('piano-key-active')
    }
})

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn') && !event.target.classList.contains('btn-active')) {
        const keys = document.querySelectorAll('.piano-key:not(.none)')

        document.querySelector('.btn-active').classList.remove('btn-active')
        event.target.classList.add('btn-active')

        keys.forEach(key => {
            if (event.target.classList.contains('btn-notes')) {
                key.dataset.letter =  key.dataset.note
                key.dataset.note = key.dataset.noteOrigin
            } else {
              
                key.dataset.note = key.dataset.letter
                key.dataset.letter =  key.dataset.noteOrigin
            }
        })
    }

    if (event.target.classList.contains('fullscreen')) {
        toggleFullScreen()
    }
})
 
document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'KeyD':
            playAudio('assets/audio/c.mp3')
            document.querySelector('.piano-key[data-note-origin=c]').classList.add('piano-key-active')
            break
        case 'KeyF':
            playAudio('assets/audio/d.mp3')
            document.querySelector('.piano-key[data-note-origin=d]').classList.add('piano-key-active')
            break
        case 'KeyG':
            playAudio('assets/audio/e.mp3')
            document.querySelector('.piano-key[data-note-origin=e]').classList.add('piano-key-active')
            break
        case 'KeyH':
            playAudio('assets/audio/f.mp3')
            document.querySelector('.piano-key[data-note-origin=f]').classList.add('piano-key-active')
            break
        case 'KeyJ':
            playAudio('assets/audio/g.mp3')
            document.querySelector('.piano-key[data-note-origin=g]').classList.add('piano-key-active')
            break
        case 'KeyK':
            playAudio('assets/audio/a.mp3')
            document.querySelector('.piano-key[data-note-origin=a]').classList.add('piano-key-active')
            break
        case 'KeyL':
            playAudio('assets/audio/b.mp3')
            document.querySelector('.piano-key[data-note-origin=b]').classList.add('piano-key-active')
            break
        case 'KeyR':
            playAudio('assets/audio/c♯.mp3')
            document.querySelector('.piano-key[data-note-origin=c♯]').classList.add('piano-key-active')
            break
        case 'KeyT':
            playAudio('assets/audio/d♯.mp3')
            document.querySelector('.piano-key[data-note-origin=d♯]').classList.add('piano-key-active')
            break
        case 'KeyU':
            playAudio('assets/audio/f♯.mp3')
            document.querySelector('.piano-key[data-note-origin=f♯]').classList.add('piano-key-active')
            break
        case 'KeyI':
            playAudio('assets/audio/g♯.mp3')
            document.querySelector('.piano-key[data-note-origin=g♯]').classList.add('piano-key-active')
            break
        case 'KeyO':
            playAudio('assets/audio/a♯.mp3')
            document.querySelector('.piano-key[data-note-origin=a♯]').classList.add('piano-key-active')
            break
    }
})

document.addEventListener('keyup', (event) => {
    switch (event.code) {
        case 'KeyD':
            document.querySelector('.piano-key[data-note-origin=c]').classList.remove('piano-key-active')
            break
        case 'KeyF':
            document.querySelector('.piano-key[data-note-origin=d]').classList.remove('piano-key-active')
            break
        case 'KeyG':
            document.querySelector('.piano-key[data-note-origin=e]').classList.remove('piano-key-active')
            break
        case 'KeyH':
            document.querySelector('.piano-key[data-note-origin=f]').classList.remove('piano-key-active')
            break
        case 'KeyJ':
            document.querySelector('.piano-key[data-note-origin=g]').classList.remove('piano-key-active')
            break
        case 'KeyK':
            document.querySelector('.piano-key[data-note-origin=a]').classList.remove('piano-key-active')
            break
        case 'KeyL':
            document.querySelector('.piano-key[data-note-origin=b]').classList.remove('piano-key-active')
            break
        case 'KeyR':
            document.querySelector('.piano-key[data-note-origin=c♯]').classList.remove('piano-key-active')
            break
        case 'KeyT':
            document.querySelector('.piano-key[data-note-origin=d♯]').classList.remove('piano-key-active')
            break
        case 'KeyU':
            document.querySelector('.piano-key[data-note-origin=f♯]').classList.remove('piano-key-active')
            break
        case 'KeyI':
            document.querySelector('.piano-key[data-note-origin=g♯]').classList.remove('piano-key-active')
            break
        case 'KeyO':
            document.querySelector('.piano-key[data-note-origin=a♯]').classList.remove('piano-key-active')
            break
    }
})
