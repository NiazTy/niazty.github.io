const audio = document.createElement("audio")

let listMusic = [
		{"title": "La Vaguelette", "artist": "HOYO-MIX", src: "music/la-vaguelette.mp3"},
		{"title": "Hikariiro no Uta", "artist": "Aina Suzuki", src: "music/hikariiro-no-uta.mp3"},
		{"title": "More Than Friends", "artist": "24KGoldn", src: "music/more-than-friends.mp3"}
	]

audio.src = listMusic[1].src
audio.volume = 0.5

const playButton = $("#play-button")

playButton.on("click", () => {
	if (audio.paused) {
		audio.play()
		playButton.toggleClass("fa-circle-pause")
	} else {
		audio.pause()
		playButton.toggleClass("fa-circle-pause")
	}
})

const title = $("#song-title")
const artist = $("#song-artist")

title.text(`${listMusic[1].title}`)
artist.text(`${listMusic[1].artist}`)


const currentTime = $("#current-time")
const duration = $("#duration")
const progressBar = $("#progress-bar")

const updateTime = () => {
	const minutes = Math.floor(audio.currentTime / 60)
	const seconds = Math.floor(audio.currentTime % 60)
	currentTime.text(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}` )

	const progress = audio.currentTime / audio.duration * 100
	progressBar.width(`${progress}%`)
}

const loaded = () => {
	const inMinutes = Math.floor(audio.duration / 60)
	const inSeconds = Math.floor(audio.duration % 60)
	duration.text(`${inMinutes}:${inSeconds < 10 ? '0' : ''}${inSeconds}`)
}

audio.addEventListener("loadedmetadata", loaded)
audio.addEventListener("timeupdate", updateTime)
