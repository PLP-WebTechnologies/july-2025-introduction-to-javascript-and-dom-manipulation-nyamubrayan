
// Part 1: Chess recommendations by Age

const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

checkAgeBtn.addEventListener('click', () => {
  const age = parseInt(ageInput.value);
  if (isNaN(age) || age <= 0) {
    ageResult.textContent = 'Please enter a valid age.';
  } else if (age < 5) {
    ageResult.textContent = 'Too young for chess';
  } else if (age <= 8) {
    ageResult.textContent = 'Start learning chess basics';
  } else if (age <= 12) {
    ageResult.textContent = 'Work on openings, endgames, and end game tactics.';
  } else if (age <= 18) {
    ageResult.textContent = 'Learn more advanced chess tactics.';
  } else {
    ageResult.textContent = 'Join chess clubs and participate in tournaments!';
  }
});


// Part 2: Chess Score Calculator

function calculateScore(wins, draws, losses) {
  return wins * 3 + draws - losses; // Simple scoring: 3 points per win, 1 per draw, -1 per loss
}

function formatScore(score) {
  return `Your chess score is: ${score}`;
}

const calcScoreBtn = document.getElementById('calcScoreBtn');
const scoreResult = document.getElementById('scoreResult');

calcScoreBtn.addEventListener('click', () => {
  const wins = parseInt(document.getElementById('wins').value);
  const draws = parseInt(document.getElementById('draws').value);
  const losses = parseInt(document.getElementById('losses').value);

  if (isNaN(wins) || isNaN(draws) || isNaN(losses)) {
    scoreResult.textContent = 'Enter valid numbers for wins, draws, and losses.';
  } else {
    scoreResult.textContent = formatScore(calculateScore(wins, draws, losses));
  }
});


// Part 3: Loop through Chess Lessons

const showLessonsBtn = document.getElementById('showLessonsBtn');
const lessonsList = document.getElementById('lessonsList');

const lessons = ['Opening Principles', 'Middle Game Tactics', 'Endgame Strategies', 'Pawn Structures', 'Positional Play'];

showLessonsBtn.addEventListener('click', () => {
  lessonsList.innerHTML = '';
  lessons.forEach((lesson, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${lesson}`;
    lessonsList.appendChild(li);
  });
});


// Part 4: Interactive Chess Board

const toggleBoardBtn = document.getElementById('toggleBoardBtn');
const addPieceBtn = document.getElementById('addPieceBtn');
const chessPiecesList = document.getElementById('chessPiecesList');

toggleBoardBtn.addEventListener('click', () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === 'beige' ? '#f8f8f8' : 'beige';
});

addPieceBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  const pieces = ['Pawn', 'Knight', 'Bishop', 'Rook', ];
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
  li.textContent = randomPiece;
  chessPiecesList.appendChild(li);
});
