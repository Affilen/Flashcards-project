document.addEventListener('DOMContentLoaded', function() {
    // menu functionality
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    menuButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });


    // Python Questions:
    const pythonQuestions = [
        { question: "What keyword is used to declare a variable in Python, and what are the different types of variable declaration keywords?", answer: "Variable names in Python are declared using keywords such as 'int', 'float', 'str', 'bool', and 'None'." },

        { question: "Explain the purpose of the try and except blocks in Python's exception handling.", answer: "The 'try' block is used to enclose code that might raise an exception, and the 'except' block is used to handle those exceptions." },

        { question: "Explain the purpose of the '__init__' method in a Python class. What role does it play in object initialization and instantiation?", answer: "The __init__ method lets the class initialize the object's attributes and serves no other purpose" },

        { question: "What is the Global Interpreter Lock(GIL) in Python, and how does it impact the execution of multi-threaded programs?", answer: "is a mutex that prevents multiple threads from executing Python bytecodes at the same time" },
        { question: "What is the purpose of the 'len()' function in Python?", answer: "The len() function returns the number of items in an object." },

        { question: "What keyword is used to declare a variable in Python, and what are the different types of variable declaration keywords?", answer: "Variable names in Python are declared using keywords such as 'int', 'float', 'str', 'bool', and 'None'." },

        { question: "Explain the purpose of the try and except blocks in Python's exception handling.", answer: "The 'try' block is used to enclose code that might raise an exception, and the 'except' block is used to handle those exceptions." },
        { question: "Explain the purpose of the '__init__' method in a Python class. What role does it play in object initialization and instantiation?", answer: "The __init__ method lets the class initialize the object's attributes and serves no other purpose" },

        { question: "What is the Global Interpreter Lock(GIL) in Python, and how does it impact the execution of multi-threaded programs?", answer: "is a mutex that prevents multiple threads from executing Python bytecodes at the same time" },

        { question: "What is the purpose of the 'len()' function in Python?", answer: "The len() function returns the number of items in an object." },

        { question: "What is Python, and why is it often described as a 'high-level' programming language?", answer: "Python is a general-purpose programming language known for its readability and simplicity. It is considered 'high-level' because it abstracts many low-level details, making it user-friendly." },

        { question: "Explain the purpose of indentation in Python.", answer: "Indentation in Python is used for structuring code. It replaces braces or brackets in other languages and signifies the beginning and end of blocks of code." },

        { question: "What is the difference between a list and a tuple in Python?", answer: "Both lists and tuples are used to store collections of items, but the main difference is that lists are mutable (can be changed), while tuples are immutable (cannot be changed once defined)." },

        { question: "What is the purpose of the 'if __name__ == '__main__': statement in a Python script?", answer: "This statement is used to check if the Python script is being run as the main program or if it is being imported as a module. It allows you to separate the script's functionality from its use as a module." },

        { question: "Explain the Global Interpreter Lock (GIL) in Python and its impact on multi-threaded programs.", answer: "The Global Interpreter Lock is a mutex that prevents multiple native threads from executing Python bytecode at once. This makes it challenging to achieve true parallelism in multi-threaded Python programs." },

    ];
    


    const submitBtn = document.querySelector(".button2");
    
    let currentQuestion = 0;
    let chances = 3;

    
    function checkAnswer() {
        const userAnswerInput = document.querySelector(".inputInside");
        const userAnswer = userAnswerInput.value.trim().toLowerCase();
        const correctAnswer = pythonQuestions[currentQuestion].answer.toLowerCase();
        const correctOrNo = document.querySelector(".textCorrect");
        const menuChange = document.getElementById("menuButton");
        const menuIcon = document.querySelector(".icon");
        const answerText = document.querySelector(".answer");


        const correct = function () {
            correctOrNo.textContent = "Correct!";
            correctOrNo.style.color = "rgba(46, 229, 157)";
            menuChange.style.color = "rgba(46, 229, 157)";
            menuIcon.style.color = "rgba(46, 229, 157)";
            currentQuestion++;
            answerText.classList.add("hidden")
            submitBtn.style.backgroundColor = "#23c483";
            submitBtn.style.boxShadow = "0px 15px 20px rgba(46, 229, 157)";
            chances = 3;
        };
    
        if (isAnswerCorrect(userAnswer, correctAnswer)) {
            correct();
            if (currentQuestion < pythonQuestions.length) {
                displayQuestion();
            } else {
                alert("Congratulations! You've answered all questions.");
                currentQuestion = 0;
                chances = 3;
            }
        } else {
            correctOrNo.textContent = "Incorrect!";
            correctOrNo.style.color = "red";
            menuChange.style.color = 'red';
            submitBtn.style.backgroundColor = "red";
            chances--;

    

    
            if (chances === 0) {
                answerText.classList.remove("hidden");
                answerText.textContent = `${correctAnswer}`;
                answerText.style.color = "rgba(46, 229, 157)";
                currentQuestion++;
                
            }else if(chances === 0 && isAnswerCorrect){
                chances = 3

            }
        }
    }
    
    function isAnswerCorrect(userAnswer, correctAnswer) {
        return userAnswer === correctAnswer;
    }
    
    function displayQuestion() {
        const questionText = document.querySelector(".textOfQuestion");
        const currentQuestionObject = pythonQuestions[currentQuestion];
    
        questionText.innerHTML = `${currentQuestionObject.question}`;
        document.querySelector(".inputInside").value = ""; // Clear the input field
    }
    submitBtn.addEventListener("click", checkAnswer);

});
