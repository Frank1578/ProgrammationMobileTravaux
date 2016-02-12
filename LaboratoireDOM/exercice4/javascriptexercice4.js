var positionX = document.getElementById("posX");
var positionY = document.getElementById("posY");

document.addEventListener('mousemove',function(e)
{
	positionX.innerHTML = 'Abscisse X: ' + e.clientX
	positionY.innerHTML = 'Abscisse Y: ' + e.clientY
}, false);