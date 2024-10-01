// Function to check answers
function checkAnswers(event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    // Define correct answers for each question
    const correctAnswers = {
        'question-1': 'lie',
        'question-2': 'lie',
        'question-3': 'lie',
        'question-4': 'lie',
        'question-5': 'lie',
        'question-6': 'lie',
        'question-7': 'lie',
        'question-8': 'lie',
        'question-9': 'lie',
        'question-10': 'lie'
    };

    let score = 0;

    // Loop through each question
    for (let question in correctAnswers) {
        // Get the selected answer for the current question
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        
        // Check if selected option is correct
        if (selectedOption && selectedOption.value === correctAnswers[question]) {
            score++;
        }
    }

    // Display result
    const totalQuestions = Object.keys(correctAnswers).length;
    const resultText = `You got ${score} out of ${totalQuestions} correct!`;
    document.getElementById('result').innerText = resultText;
}

// Function to initialize event listeners
function initializeEventListeners() {
    // Get the form element
    const form = document.getElementById('quiz-form');
    
    // Add submit event listener to the form
    form.addEventListener('submit', checkAnswers);
}

// Initialize event listeners when the page loads
document.addEventListener('DOMContentLoaded', initializeEventListeners);
