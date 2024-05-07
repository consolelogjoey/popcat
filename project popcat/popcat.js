const tomeow = document.getElementById('tomeow')
const btn = document.getElementById('btn')

const openmouthimp = "./open.png"
const closemouthimp = "./close.png"

const openmouthsound = new Audio('sound_sound-open.mp3')
const closemouthsound = new Audio('sound_sound-close.mp3')

btn.addEventListener('mousedown', openmouth)
btn.addEventListener('mouseup', closemouth)

function openmouth(){
    tomeow.src = openmouthimp
    openmouthsound.play()
}

function closemouth(){
    tomeow.src = closemouthimp
    closemouthsound.play()
}