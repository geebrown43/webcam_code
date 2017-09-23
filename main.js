var video = document.getElementById('video')
var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

document.getElementById('button').addEventListener('click', () => {
    canvas.width = video.clientWidth
    canvas.height = video.clientHeight
    context.drawImage(video, 0, 0)
})

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video: true}, {audio: true}).then((stream) => {
        video.src = window.URL.createObjectURL(stream)
    })
}