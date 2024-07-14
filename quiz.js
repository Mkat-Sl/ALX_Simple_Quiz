function checkAnswer(){
    const correctAnswer = "4";
    // const userAnswer = document.querySelector('input[type = "radio"]:checked').value;
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    const feedBack = document.getElementById('feedback');

    if(userAnswer === correctAnswer){
        feedBack.textContent = "Correct! Well done.";
    } else {
        feedBack.textContent = "That's incorrect. Try again!";
    }
};
const submitBtn = document.getElementById('submit-answer');
submitBtn.addEventListener('click', checkAnswer);


