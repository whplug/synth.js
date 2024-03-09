document.addEventListener('DOMContentLoaded', () => {
document.querySelector('.play').addEventListener('click', () => {
    const actx = new (AudioContext || webkitAudioContext)();
    if (!actx) throw 'Not supported :(';
    const osc = actx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 30;
    osc.connect(actx.destination);
    osc.start();
    osc.stop(actx.currentTime + 10);
});
});