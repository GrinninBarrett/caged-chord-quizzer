const chordEl = document.querySelector('#chord');
const shapeEl = document.querySelector('#shape');

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const timeSelect = document.querySelector('#time-select');

const warning = document.querySelector('#warning');

let timeValue;
let quizInterval;

const chords = [
    "C",
    "C#/Db",
    "D",
    "D#/Eb",
    "E",
    "F",
    "F#/Gb",
    "G",
    "G#/Ab",
    "A",
    "A#/Bb",
    "B"
]

const shapes = [
    "C",
    "A",
    "G",
    "E",
    "D"
]

function quiz() {
    timeValue = timeSelect.value;
    if (!timeValue) {
        warning.style.visibility = "visible";
        return;
    }
    startButton.style.display = "none";
    stopButton.style.display = "block";
    warning.style.visibility = "hidden";


    showQuiz();
    quizInterval = setInterval(showQuiz, timeValue);


}


function showQuiz() {
    let randomChord = chords[Math.floor(Math.random() * chords.length)];
    let randomShape = shapes[Math.floor(Math.random() * shapes.length)];

    chordEl.textContent = randomChord;
    shapeEl.textContent = randomShape;
    
}

startButton.addEventListener('click', quiz);
stopButton.addEventListener('click', function() {
    clearInterval(quizInterval);
    stopButton.style.display = "none";
    startButton.style.display = "block";
    chordEl.textContent = '';
    shapeEl.textContent = '';
})