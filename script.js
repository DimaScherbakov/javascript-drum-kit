var kits = document.querySelectorAll(".sound-kit"),
keyCode,sound,key;
// console.log(kits)

function playSound(event){
	sound = document.querySelector(`audio[data-code='${event.keyCode}']`)
	key = document.querySelector(`button[data-sound-type='${event.keyCode}']`)
	sound.currentTime = 0;
	console.log(key)
	if(!sound)return;
	sound.play()
	key.classList.add("playing"); 
}

function removeTransition(e){
	console.log(e.propertyName)
	 if(e.propertyName !== 'transform') return;
	 key.classList.remove("playing");
}

kits.forEach(function (kit){
	console.log()
	kit.addEventListener('transitionend', removeTransition)})
document.addEventListener("keydown",playSound)