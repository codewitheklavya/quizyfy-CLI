let readlinesync = require("readline-sync");
let kular  = require("kuler");

const database = {
  data:[
    {
      question: " From MCU : who killed thanos?",
      options:{
        a: "thor",
        b: "ironman",
        c: "hulk",
        d: "jd"
      },
        correctAnswer: "b"
    },
      {
        question: "From college: who is the topper of the class?",
        options:{
          a: "amit",
          b: "Vicky",
          c: "shivam",
          d: "jd"
        },
        correctAnswer: "a"
      },
    {
      question: "From college: who is the smartest person in the class?",
      options:{
        a: "vicky",
        b: "shivam",
        c: "jd",
        d: "amit"
      },
      correctAnswer: "c"
    },
    {
      question: "From college: who is the luckiest person in the class?",
      options:{
        a: "amit",
        b: "vicky",
        c: "jd",
        d: "shivam"
      },
      correctAnswer: "b"
    },
    {
      question: "From college: who is the singer in the class?",
      options:{
        a: "jd",
        b: "vicky",
        c: "amit",
        d: "shivam"
      },
      correctAnswer: "d"
    },
    {
      question: "From MCU: who loves scarlet witch?",
      options:{
        a: "vission",
        b: "shivam",
        c: "jd",
        d: "captain america",
      },
      correctAnswer: "a"
    },
    {
      question: "From personal life: who did cryed after watched saiyara? ",
      options:{
        a: "jd",
        b: "shivam",
        c: "vicky",
        d: "amit",
      },
      correctAnswer: "c",
    },
    {
      question: "From college: who is the best dancer in the class?",
      options:{
        a: "jd",
        b: "shivam",
        c: "vicky",
        d: "amit",
      },
      correctAnswer: "d",
    },
    {
      question: "From college: which teachers has best teaching skill in the class?",
      options:{
        a: "poonam ma'am",
        b: "rita ma'am",
        c: "pathak ma'am",
        d: "manjari ma'am",
      },
      correctAnswer: "d",
    },
    {
      question: "From sports: who has the best inswinger & outswinger bowling skills?",
      options:{
        a: "jd",
        b: "eklavya",
        c: "vicky",
        d: "amit",
      },
      correctAnswer: "b",
    }
  ]
}

//now creating leader board which is non dynamically
const leaderBoard ={
  data: [
    {
      name: "eklavya",
      score : 8,
    },
    {
      name: "raju",
      score: 7,
    },
    {
      name: "lalbabu",
      score: 6,
    },
    {
      name: "pikachu",
      score: 9,
    },
    {
      name: "chalu pandey",
      score: 10,
    },
    {
      name: "popat laal",
      score: 6,
    },
    {
      name: "jethalaal",
      score: 5,
    }
  ]
}

//now creating a logic of quizyfy
let score = 0;

function playgame(UserAnswer,correctAnswer){
  if(UserAnswer === correctAnswer){
    console.log(kuler("Correct Answer", "#059669"));
    score++;
  }else{
    console.log(kuler("Incorrect Answer","#b91c1c"));
    console.log(kular(`Correct Answer is: ${correctAnswer}`,"#1d4ed8"));
  }
}

function ShowQuestionAndOptions(database){
  for(let i=0; i<database.data.length; i++){
    console.log(`\n Question ${i+1} : ${database.data[i].question}\n`);
    for(let key in database.data[i].options){
      console.log(`${key}: ${database.data[i].options[key]}`);
    }
    let UserAnswer = readlinesync.question("Enter your answer: (a/b/c/d) - ").toLowerCase();
    playgame(UserAnswer,database.data[i].correctAnswer);
  }
  console.log(`\nGame Over! Your final score: ${score}/${database.data.length}`);
}

function showLeaderBoard(){
  console.log("\n--- LEADERBOARD ---");
  leaderBoard.data.sort((a, b) => b.score - a.score);
  for(let i = 0; i < leaderBoard.data.length; i++){
    console.log(kular(`${i+1}. ${leaderBoard.data[i].name} - ${leaderBoard.data[i].score} points`,"#9333ea"));
  }
}

// Main game execution
console.log("Welcome to the Quiz Game!");
console.log("Answer the questions by typing a, b, c, or d");

showLeaderBoard();
ShowQuestionAndOptions(database);
