/* Form submit confirmation message */
document.getElementById('simpleForm').addEventListener('submit', function (event) {
	event.preventDefault()
	const confirmationMessage = document.getElementById('confirmationMessage')
	confirmationMessage.style.display = 'block'
	this.reset()
})

/* Back to top button */
window.onscroll = function () {
	if (window.scrollY > 1000) {
		document.body.classList.add('scrolled')
	} else {
		document.body.classList.remove('scrolled')
	}
}

/* YouTube video player optimisation */
function youtubeIframe(div) {
	var iframe = document.createElement('iframe')
	iframe.setAttribute('src', 'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&rel=0')
	iframe.setAttribute('frameborder', '0')
	iframe.setAttribute('allowfullscreen', '1')
	iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture')
	iframe.setAttribute('title', 'YouTube video player')
	div.parentNode.replaceChild(iframe, div)
}

function initYouTubeVideos() {
	var playerElements = document.getElementsByClassName('youtube-player')
	for (var n = 0; n < playerElements.length; n++) {
		var videoId = playerElements[n].dataset.id
		var div = document.createElement('div')
		div.setAttribute('data-id', videoId)
		var thumbNode = document.createElement('img')
		thumbNode.src = 'https://i.ytimg.com/vi/ID/hqdefault.jpg'.replace('ID', videoId)
		div.appendChild(thumbNode)
		var playButton = document.createElement('div')
		playButton.setAttribute('class', 'play')
		div.appendChild(playButton)
		div.onclick = function () {
			youtubeIframe(this)
		}
		playerElements[n].appendChild(div)
	}
}

document.addEventListener('DOMContentLoaded', initYouTubeVideos)
