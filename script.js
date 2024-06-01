const video = document.querySelector("video");
const progressBar = document.querySelector(".progress__filled");
const playButton = document.querySelector(".player__button");
const volumeInput = document.querySelector("[name='volume']");
const playbackSpeedInput = document.querySelector("[name='playbackRate']");
const rewindButton = document.querySelector(".rewind");
const skipButton = document.querySelector(".skip");

const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
