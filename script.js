const questions = [
  {
    question: "Which task sounds most fulfilling?",
    options: [
      { text: "Solving technical problems", archetype: "Engineer" },
      { text: "Helping others succeed", archetype: "Mentor" },
      { text: "Designing creative content", archetype: "Artist" }
    ]
  },
  {
    question: "Which environment do you thrive in?",
    options: [
      { text: "Fast-paced and dynamic", archetype: "Entrepreneur" },
      { text: "Structured and organized", archetype: "Analyst" },
      { text: "Collaborative and supportive", archetype: "Mentor" }
    ]
  },
  {
    question: "How do you prefer to spend your free time?",
    options: [
      { text: "Tinkering with projects", archetype: "Engineer" },
      { text: "Creating digital art/music", archetype: "Artist" },
      { text: "Researching trends or markets", archetype: "Analyst" }
    ]
  },
  {
    question: "What motivates you most?",
    options: [
      { text: "Innovation and disruption", archetype: "Entrepreneur" },
      { text: "Impacting others positively", archetype: "Mentor" },
      { text: "Mastering a complex skill", archetype: "Engineer" }
    ]
  },
  {
    question: "Pick a dream job:",
    options: [
      { text: "Startup Founder", archetype: "Entrepreneur" },
      { text: "Data Scientist", archetype: "Analyst" },
      { text: "Creative Director", archetype: "Artist" }
    ]
  }
];

const scores = {};

function renderQuestions() {
  const form = document.getElementById("quiz-form");
  questions.forEach((q, idx) => {
    const div = document.createElement("div");
    div.innerHTML = `<p><strong>${q.question}</strong></p>`;
    q.options.forEach((opt, optIdx) => {
      div.innerHTML += `
        <label>
          <input type="radio" name="q${idx}" value="${opt.archetype}" required>
          ${opt.text}
        </label><br>
      `;
    });
    form.appendChild(div);
  });
}

function submitQuiz() {
  const formData = new FormData(document.getElementById("quiz-form"));
  scores.Engineer = 0;
  scores.Mentor = 0;
  scores.Artist = 0;
  scores.Entrepreneur = 0;
  scores.Analyst = 0;

  for (let [_, value] of formData.entries()) {
    scores[value]++;
  }

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [primary, secondary, wildcard] = sorted;

  document.getElementById("result").innerHTML = `
    <h2>Your Archetypes:</h2>
    <ul>
      <li><strong>Primary:</strong> ${primary[0]}</li>
      <li><strong>Secondary:</strong> ${secondary[0]}</li>
      <li><strong>Wildcard:</strong> ${wildcard[0]}</li>
    </ul>
  `;
}

renderQuestions();
