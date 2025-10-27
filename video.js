
//https://www.reddit.com/r/webdev/comments/g4vgum/is_there_a_way_to_view_safaris_console_without/

var l=document.getElementById("debug");

function debugLog(text) {
    console.log("debuglog: " + text);
    l.innerHTML = l.innerHTML + "</br>" + text;
}

console.log("test");

// https://stackoverflow.com/questions/69326902/html-canvas-video-streaming

var canvas= document.getElementById('canvas'),
context = canvas.getContext('2d'),
video = document.getElementById('video'),
vendorUrl = window.URL || window.webkitURL;

/*
navigator.getMedia = navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia;
*/

// https://stackoverflow.com/questions/53483975/navigator-mediadevices-getusermedia-not-working-on-ios-12-safari
video.setAttribute('autoplay', '');
video.setAttribute('muted', '');
video.setAttribute('playsinline', '');
//

// https://stackoverflow.com/questions/72936834/capturing-camera-stream-in-three-js-on-ios
constraints = { audio: false, video: { facingMode: 'environment' } };
navigator.mediaDevices.getUserMedia(constraints)
.then(function (stream) {
    console.log("success");
    video.srcObject = stream;
    video.play();
})
.catch(function(err) {
    console.log('ERROR: ', err);
});

/*
navigator.getMedia ({
    video: true,
    audio: false
}, function(stream) {
    debugLog("got stream");
    //video.src = vendorUrl.createObjectURL(stream);
    if ('srcObject' in video) {
        debugLog("video has srcobj");
        video.srcObject = stream;
        debugLog("set video srcobj to stream");
        } else {
        debugLog("set video srcobj to createobjecturl stream");
        video.src = vendorUrl.createObjectURL(stream);
        }
    video.play();
    debugLog("playing video");
}, function(error) {
    // An error occured
    debugLog("error: " + error);
});
*/



/*
video.addEventListener('play', function() {
    setInterval(() => {
    draw(this, context, 400, 300);
    }, 100);

}, false );
function draw(video, context, width, height) {
    context.drawImage(video, 0, 0, width, height);
}
*/