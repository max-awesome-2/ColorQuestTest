
https://www.reddit.com/r/webdev/comments/g4vgum/is_there_a_way_to_view_safaris_console_without/
console.log=function(){
    var l=document.getElementById("debug");
    l.innerhtml = l.innerhtml+arguments[0]+' '+(arguments[1]?arguments[1]:'')+'<br>';
};

console.log("test");

// https://stackoverflow.com/questions/69326902/html-canvas-video-streaming
(function() {
    var canvas= document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    video = document.getElementById('video'),
    vendorUrl = window.URL || window.webkitURL;

    navigator.getMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia;

    // https://stackoverflow.com/questions/53483975/navigator-mediadevices-getusermedia-not-working-on-ios-12-safari
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    //

    navigator.getMedia ({
        video: true,
        audio: false
    }, function(stream) {
        //video.src = vendorUrl.createObjectURL(stream);
        if ('srcObject' in video) {
            video.srcObject = stream;
          } else {
            video.src = vendorUrl.createObjectURL(stream);
          }
        video.play();
    }, function(error) {
        // An error occured
        //error.code
    });


    video.addEventListener('play', function() {
        setInterval(() => {
        draw(this, context, 400, 300);
        }, 100);

    }, false );
    function draw(video, context, width, height) {
        context.drawImage(video, 0, 0, width, height);
    }
    
}) ();