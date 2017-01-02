var video = document.createElement('video');
var canvas = document.querySelector('canvas');
canvas.width = 640/2;
canvas.height = 480/2;

function hasUserMedia() { 
	//check if the browser supports the WebRTC 
	return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || 
			navigator.mozGetUserMedia); 
} 

if (hasUserMedia()) { 
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
		|| navigator.mozGetUserMedia; 

	//enabling video and audio channels 
	navigator.getUserMedia({ video: true, audio: false }, function (stream) { 
		//inserting our stream to the video tag     
		video.srcObject = stream;
	}, function (err) {}); 
} else { 
	alert("WebRTC is not supported"); 
}

function draw() {
	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
}

function play() {
	window.id = setInterval(draw, 1000/10);
}

function stop() {
	if (window.id != null) {
		clearInterval(window.id);
		window.id = null;
	}
}
