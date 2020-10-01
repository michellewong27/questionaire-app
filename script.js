const quizData = [
  {
    question: 'What year was React released?',
    a: '2005',
    b: '2009',
    c: '2016',
    d: '2013',
    correct: 'd'
  },
  {
    question: 'How old is Michelle?',
    a: '28',
    b: '23',
    c: '26',
    d: '24',
    correct: 'b'
  }, 
  {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    corect: 'd'
  },
  {
    question: 'Who was the president in 1982?',
    a: 'Jimmy Carter',
    b: 'Ronald Reagan',
    c: 'Richard Nixon',
    d: 'George H. W. Bush',
    correct: 'b'
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hyperactive Text Monitoring Language',
    c: 'History Text Memo Language',
    d: 'Hack Title Micro Lynx',
    correct: 'a'
  }, 
  {
    question: 'What year was JavaScript launched?',
    a: '1995',
    b: '1994',
    c: '1996',
    d: 'None of the above',
    correct: 'd'
  }
];

const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;
//calls everytime you submit
loadQuiz();

function loadQuiz(){
  const currentQuizData = quizData[currentQuiz];
  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;


}

function getSelected(){
  const answersEls = document.querySelectorAll('.answer');

  let answer = undefined;
  
  answersEls.forEach((answerEl) => {
    if(answerEl.checked){
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  //check to see answer
  const answer = getSelected();

  if (answer){
    if (answer === quizData[currentQuiz].correct){
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      alert('You finished the quiz!');
      //show results
    }
  }

})