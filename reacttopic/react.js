document.addEventListener('DOMContentLoaded', function() {
    // menu functionality
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    menuButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });


    // react Questions:
    const reactQuestions = [
        {question:"What is React?",answer:"React is a JavaScript library for building user interefaces,developed by Facebook"},
        {question:"What is JSX in React?", answer:"JSX is a syntax extension for JavaScript that looks similar to XML or HTML and is used with React to describe what the UI should look like"},
        {question:"What is virtual DOM in React?",answer:"The virtual DOM is a lighweight in-memory represantation of the real DOM elements. React uses it to imporve performance by minimizing direct manipulation of the actual DOM"},
        {question:"Explain the concept of state in React.",answer:"State is an object that represents the parts of a component that can change. It is managed internally by the component and can influance what is rendered."},
        {question:"What is React component",answer:"A React component is a reusable, self-contained piece of code that can render UI elements. Components can be either functional or class-based."},
        {question:"How do you pass data between components in React?",answer:"Data can be passed from a parent component to a child component through props."},
        {question:"What is the purpose of the useState hook in React?",answer:"THe useState hook is used to add state functional components in React."},
        {question:"How does React handle forms?",answer:"React handles forms by using controlled components, where the form data is controlled by the React component's state."},
        {question:"What is the role of the useEffect hook in React?",answer:"The useEffect hook is used for side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM"},
        {question:"What is the significance of keys in React when rendering lists of elements?",answer:"Keys are used to uniquely identify elements in a list, helping React to efficiently update and re-render the component when the list changes."},
        {question:"What are props in React?",answer:"Props(short for properties) are a way to pass data from a parent component to a child component in React."},
        {question:"Explaing the concept of React Hooks.",answer:"React Hook are function that enable the use of state and lifecycle features in functional components. They include useState for managing state, useEffect for side effects, useContext for accessing context, and more."},
        {question:"What is the differenece between state and props in React?",answer:"State is managed withing a component and can change over time, influencing the component's rendering. Props, on the other hand, are external inputs passed to a component, and once set, they are immutable."},
        {question:"What is Redux, and how does it work with React?",answer:"Redux is a state management library for JavaScript applications. It provides a predictable state container that can be used with React to manage the state of the entire application in a centralized store."},
        {question:"Explain the concept of React Router.",answer:"React Router is a library for handling navigation and routing in React applications. It allows developers to create single-page applications with multiple views, each associated with a unique URL, without the need for a page reload."},
    ];
    


    const submitBtn = document.querySelector(".button2");
    
    let currentQuestion = 0;
    let chances = 3;

    
    function checkAnswer() {
        const userAnswerInput = document.querySelector(".inputInside");
        const userAnswer = userAnswerInput.value.trim().toLowerCase();
        const answerText = document.querySelector(".answer");
        const correctAnswer = reactQuestions[currentQuestion].answer.toLowerCase();
        const correctOrNo = document.querySelector(".textCorrect");
        const menuChange = document.getElementById("menuButton");
        const menuIcon = document.querySelector(".icon");



        
        
    
        const correct = function () {
            correctOrNo.textContent = "Correct!";
            correctOrNo.style.color = "rgba(46, 229, 157)";
            menuChange.style.color = "rgba(46, 229, 157)";
            menuIcon.style.color = "rgba(46, 229, 157)";
            currentQuestion++;
            answerText.classList.add("hidden")
            submitBtn.style.backgroundColor = "#23c483";
            // submitBtn.style.boxShadow = "0px 15px 20px rgba(46, 229, 157)";
        };
    
        if (isAnswerCorrect(userAnswer, correctAnswer)) {
            correct();
            if (currentQuestion < reactQuestions.length) {
                displayQuestion();
            } else {
                alert("Congratulations! You've answered all questions.");
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
            }
        }
    }
    
    function isAnswerCorrect(userAnswer, correctAnswer) {
        return userAnswer === correctAnswer;
    }
    
    function displayQuestion() {
        const questionContainer = document.querySelector(".flashQuestion");
        const questionText = document.querySelector(".textOfQuestion");
        const currentQuestionObject = reactQuestions[currentQuestion];
    
        questionText.innerHTML = `${currentQuestionObject.question}`;
        document.querySelector(".inputInside").value = ""; // Clear the input field
    }
    submitBtn.addEventListener("click", checkAnswer);

});
