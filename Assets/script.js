// VARIABLES

let timeLeft= 100;
let currentQuestion = {};
let questionsPool = [];
let score = 0;
let gameOver = false; //boulean
const rightAnswer = 10;
const wrongAnswer = 10;


// QUESTIONS AND ANSWERS FOR QUIZ
var question = [

    { question: "What symbols are used to display a function?",
    a : "[] and {}",
    b : "() and []",
    c : "{} and []",
    answer: "c",
    },
    { question: "What is the correct syntax for referring to an external script called "xxx.js"?",
    a : "<script src="xxx.js">",
    b : "<script name="xxx.js">",
    c : "<script href="xxx.js">",
    answer: "a",
    },
   
    { question: "How do you write "Stream Indigo" in an alert box?",
    a : "alert("Stream Indigo")",
    b : "alertBox="Stream Indigo",
    c : "alertBox("Stream Indigo")",
    answer: "a",
    },
   
    { question: "What is the correct way to write a JavaScript array?",
    a : "avar txt = new Array:1=("joshua")2=("dk")3=("tae")",
    b : "var txt = new Array("joshua","dk","tae")",
    c : "var txt = new Array="joshua","dk","tae"",
    answer: "b",
    },
   
    { question: "How can you add a comment in a JavaScript?",
    a : "#This is a comment",
    b : "<!--This is a comment-->",
    c : "//This is a comment",
    answer: "c",
    },

   ];

