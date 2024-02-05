document.addEventListener('DOMContentLoaded', function() {
    // menu functionality
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    menuButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
    // JS Questions:
    const javascriptQuestions = [
        { question: "What Keyword is used to declare a variable in JavaScript", answer: "Var,Let,Const" },
        { question: "What is the purpose of the addEventListener method in JavaScript", answer: "It is used to attach an event handler function to an HTML element." },
        { question: "How does the for loop syntax in JavaScript look like?", answer: "for(initialization;condition;iteration{/*code to be executed*/}" },
        { question: "what is the purpose of the typeof operator in JavaScript?", answer: "It is used to determine the data type of a variable or an expression." },
        { question: "Explain the concept of closures in JavaScript.", answer: "Closures refer to the ability of a function to retain access to variables from its lexical scope even after the function has finished executing." },
        {question:"What is the purpose of HTML?", answer:"HTML is used to structure content on the web."},
        {question:"How do you change the font color of text in HTML using CSS?", answer:"you can use the 'color' attribute within an HTML tag."},
        {question:"What is the CSS Box Model, and why is it important in web development?", answer:"The CSS Box Model is a design concept that represents an HTML element as a rectangular box. It includes the content, padding, border, and margin."},
        {question:"Describe the difference between inline and block-level elements in HTML.", answer:" Block-level elements start on a new line and take up the full width available, while inline elements do not start on a new line and only take up as much width as necessary."},
        {question:"How does the CSS specificity system work, and why is it important?", answer:"CSS specificity is a system that determines which style rules are applied when there are conflicting styles. It is based on the specificity of selectors. "},
        {question:" Explain the concept of responsive design in web development.", answer:"Responsive design is an approach to web development that ensures a webpage looks good on a variety of devices and screen sizes. It involves using flexible grids and layouts, media queries, and fluid images to create a user-friendly experience across different devices."},
        {question:"What is the purpose of the CSS z-index property, and how does it affect the stacking order of elements?", answer:"The z-index property in CSS controls the stacking order of positioned elements. Elements with a higher z-index value are displayed in front of elements with a lower value."},
        {question:"What does HTML stand for, and why is it considered a markup language?", answer:" HTML stands for HyperText Markup Language. It is considered a markup language because it uses tags to markup or define elements within a document, indicating the structure and presentation of content."},
        {question:"How do you create a hyperlink in HTML?", answer:" To create a hyperlink, you use the <a> (anchor) tag in HTML. "},
        {question:"Explain the CSS box-sizing property and its potential impact on layout.", answer:" The box-sizing property in CSS controls how the width and height of an element are calculated. The default value is content-box, which includes only the content. Setting it to border-box includes padding and border in the total width and height, making it easier to manage layout and avoid unexpected sizing issues."},
        {question:"How to determine if the browser supports a certain feature?",answer:"@support tag in the CSS is used to scan and determine whether the browser supports a certain feature or not."}
     ];
    // python category with change 

     
    let currentQuestion = 0;
    let chances = 3;
   const newGame = function(){
        currentQuestion = 0
        chances = 3 
        submitBtn.style.backgroundColor = "#fff"
        submitBtn.style.color = "black"
        submitBtn.style.padding = "1.6em 5em"
        submitBtn.textContent = "Submit Answer";
        answerText.classList.add("hidden");
     }

    
    function checkAnswer() {
        const userAnswerInput = document.querySelector(".inputInside");
        const userAnswer = userAnswerInput.value.trim().toLowerCase();
        const correctAnswer = javascriptQuestions[currentQuestion].answer.toLowerCase();
        const correctOrNo = document.querySelector(".textCorrect")
        const menuChange = document.getElementById("menuButton")
        const menuIcon = document.querySelector(".icon")

        const answerText = document.querySelector(".answer")

            // Correct answer function 
            const correct = function(){
            correctOrNo.textContent = "Correct!";
            correctOrNo.style.color = "rgba(46, 229, 157)"
            menuChange.style.color = "rgba(46, 229, 157)"
            menuIcon.style.color = "rgba(46, 229, 157)"
            currentQuestion++;
            answerText.classList.add("hidden")
            chances = 3 
            submitBtn.style.backgroundColor ="#23c483";
            submitBtn.style.boxShadow ="0px 15px 20px rgba(46, 229, 157)";
             // Correct answer function 
    }
        
        if (isAnswerCorrect(userAnswer, correctAnswer)) {
             correct()
            if (currentQuestion < javascriptQuestions.length) {
                displayQuestion();
            } else {
                alert("Congratulations! You've answered all questions.");
            }
        } else {
           correctOrNo.textContent = "Incorrect!";
           correctOrNo.style.color ="red"
           menuChange.style.color = 'red'
           submitBtn.style.backgroundColor="red"
           chances--
           
  
           if(chances===0){
            answerText.classList.remove("hidden");
            answerText.textContent = `${correctAnswer}`;
            answerText.style.color = "rgba(46, 229, 157)";
            currentQuestion++
            submitBtn.textContent = "Try again"
            submitBtn.addEventListener("click", function(){
                newGame()
            })
        }
    }
}                   
function removePunctuation(text) {
    // Use a regular expression to remove punctuation
    return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}
    
    function isAnswerCorrect(userAnswer, correctAnswer) {
        // Implement custom logic for flexible answer comparison
        // For example, you can use regular expressions or other techniques
        // Here, we're using a simple strict equality check
        const cleanedUserAnswer = removePunctuation(userAnswer);
        const cleanedCorrectAnswer = removePunctuation(correctAnswer);
        return cleanedUserAnswer.toLowerCase() === cleanedCorrectAnswer.toLowerCase();
        }
    
    
    
    const submitBtn = document.querySelector(".button2");
    submitBtn.addEventListener("click", checkAnswer);


    function displayQuestion() {
        document.querySelector(".flashQuestion").textContent = `${javascriptQuestions[currentQuestion].question}`;
        document.querySelector(".inputInside").value = ""; // Clear the input field
    }
    
}); 


