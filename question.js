//creating an array and passing the questions, options, answer and hint

const quizQuestions = [
    {
        question: "What is the capital city of France?",
        options: ["Paris","London","Madrid","Rome"],
        hint: "The city is famous for the Eiffel Tower and its museums.",
        correct: "Paris"
    },
   
    {
        question: "How many letters are there in the English alphabet?",
        options:["23",
        "24",
        "26",
        "30"],
        hint: "Republic day is celebrated on this day",
        correct: "26"
    },
    {
        question: "In what year did World War II end?",
        options:["1945",
        "1914",
        "1939",
        "1950"],
        hint: "The war lasted six years and involved many countries.",
        correct: "1945"
    },
    {
        question: "What is the largest planet in our solar system?",
        options:["Mars",
        "Saturn",
        "Jupiter",
        "Earth"],
        hint: "This gas giant has a giant red spot on its surface.",
        correct: "Jupiter"
    },
    {
        question: "Who wrote the Harry Potter book series?",
        options:["J.K. Rowling",
        "Stephen King",
        "George R.R. Martin",
        "Dan Brown"],
        hint: "The author is British and started writing the series in the 1990s.",
        correct: "J.K. Rowling"
    },
    {
        question: "What is the smallest country in the world?",
        options:["Monaco",
        "San Marino",
        "Vatican City",
        "Liechtenstein"],
        hint: "This country is located within the city of Rome.",
        correct: "Vatican City"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options:["China",
        "Japan",
        "South Korea",
        "Thailand"],
        hint: "This country is famous for sushi, samurai, and anime.",
        correct: "Japan"
    },
    {
        question: "Who was the first president of the United States?",
        options:["George Washington",
        "Abraham Lincoln",
        "Thomas Jefferson",
        "John F. Kennedy"],
        hint: "This Founding Father led the American Revolution against Great Britain.",
        correct: "George Washington"
    },
    {
        question: "What is the largest mammal in the world?",
        options:["Elephant",
        "Giraffe",
        "Blue whale",
        "Hippopotamus"],
        hint: "This marine animal can weigh up to 200 tons.",
        correct: "Blue whale"
    },
    {
        question: "Who painted the famous painting \"Starry Night\"?",
        options:["Vincent van Gogh",
        "Claude Monet",
        "Pablo Picasso",
        "Salvador Dali"],
        hint: "This Dutch painter suffered from mental illness and only sold one painting during his lifetime.",
        correct: "Vincent van Gogh"
    },
    {
        question: "Garampani sanctuary is located at?",
        options: [
            "Junagarh, Gujarat",
            "Diphu, Assam",
            "Kohima, Nagaland",
            "Gangtok, Sikkim"
        ],
        hint: "State that is famous for Tea planting.",
        correct: "	Diphu, Assam",
    },

    {
        question: "What is the largest desert in the world?",
        options:["Sahara",
        "Gobi",
        "Arctic",
        "Antarctic"],
        hint: "This desert covers an area of about 3.6 million square miles.",
        correct: "Sahara"
    },
    {
        question: "What is the highest mountain in the world?",
        options:["Mount Kilimanjaro",
        "Mount Everest",
        "Mount Denali",
        "Mount Fuji"],
        hint: "This mountain is located in the Himalayas and is over 29,000 feet tall",
        correct: "Mount Everest"
    },
    {
        question: "Who wrote the play \"Romeo and Juliet\"?",
        options:["Tennessee Williams",
        "Arthur Miller",
        "William Shakespeare",
        "Eugene O'Neill"],
        hint: "This English playwright is considered one of the greatest writers in the English language.",
        correct: "William Shakespeare"
    },
    {
        question: "Which is the smallest planet in our solar system?",
        options:["Mars",
        "Mercury",
        "Venus",
        "Neptune"],
        hint: "This planet is named after the Roman messenger god.",
        correct: "Mercury"
    },
    {
        question: "Who discovered electricity?",
        options:["Thomas Edison",
        "James Watt",
        "Nikola Tesla",
        "Benjamin Franklin"],
        hint: "This American scientist conducted the kite experiment to demonstrate the nature of electricity.",
        correct: "Benjamin Franklin"
    },
    {
        question:  "How many days are there in the month of February in a leap year?",
        options:["29",
        "28",
        "30",
        "31"],
        hint: "It comes before 30 ",
        correct: "29"
    },
    {
        question: "Which element is represented by the chemical symbol Fe?",
        options:["Gold",
        "Iron",
        "Silver",
        "Copper"],
        hint: "This metal is a common component of steel.",
        correct: "Iron"
    },
    {
        question: "What is the largest ocean in the world?",
        options:["Atlantic",
        "Indian",
        "Pacific",
        "Arctic"],
        hint: "This ocean covers about one-third of the Earth's surface.",
        correct: "Pacific"
    }
];


function getMultipleRandom(sourceArray, num) {
    sourceArray.sort(() => {
        return Math.random() - 0.5;
    });
    return sourceArray.slice(0, num);
}
const quizQues = getMultipleRandom(quizQuestions, 10);