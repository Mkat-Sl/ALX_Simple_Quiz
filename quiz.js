// const answers = document.querySelectorAll('input');
// Array.from(answers).forEach(function(answer){
//     answer.addEventListener('checked', function(){
//         const correctAnswer = 

//     })
// })
const quizes = document.querySelectorAll('name');
// Array.from(quizes).forEach(function(e){
// });
function checkAnswer(correctAnswer){
    correctAnswer = 4;
    const userAnswer = quizes.querySelectorAll('input[type = "radio"]').value;
    const feedBack = document.querySelector('#feedback');
    if(correctAnswer = userAnswer){
        feedBack.textContent = 'Correct! Well done.';
        console.log(feedBack);
    } else {
        feedBack.textContent = 'hjsj';
        console.log(feedBack);

    };
    const submitBtn = document.getElementById('#submit-answer');
    submitBtn.addEventListener('click', checkAnswer);
    // const userAnswer = document.querySelectorAll('')
    // const userAnswer = quize.querySelector
}