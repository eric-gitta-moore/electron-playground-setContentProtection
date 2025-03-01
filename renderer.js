// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const vid = document.getElementById('vid')
vid.onloadedmetadata = (e) => vid.play()
function handleError (e) {
  console.log(e)
}
const setVidSrc = async () => {
    try{
        const sources = await window.desktopCapturer.getSources()
        const media = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                mandatory: {
                    chromeMediaSource: 'desktop',
                    chromeMediaSourceId: sources[0].id
                }
            }
        })
        vid.srcObject = media
        window.desktopCapturer.openSecondWindow()
    }catch(ex){
        handleError(ex)
    }
}
setVidSrc()
