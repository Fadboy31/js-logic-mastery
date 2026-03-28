let students = JSON.parse(localStorage.getItem("students")) || [];

// Save data
function saveData() {
  localStorage.setItem("students", JSON.stringify(students));
}

// Calculate average
function calculateAverage(scores) {
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}

// Grade
function getGrade(avg) {
  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  if (avg >= 70) return "C";
  if (avg >= 60) return "D";
  return "F";
}

// Add student
function addStudent() {
  const name = document.getElementById("name").value.trim();
  const scoresInput = document.getElementById("scores").value;

  if (!name) return alert("Enter name");

  const scores = scoresInput.split(",").map(Number);

  if (scores.some(s => isNaN(s) || s < 0 || s > 100)) {
    return alert("Invalid scores");
  }

  const avg = calculateAverage(scores);
  const grade = getGrade(avg);

  students.push({ name, scores, average: avg, grade });

  saveData();
  displayStudents();

  document.getElementById("name").value = "";
  document.getElementById("scores").value = "";
}

// Display
function displayStudents() {
  const container = document.getElementById("studentList");
  const search = document.getElementById("search").value.toLowerCase();
  const filter = document.getElementById("gradeFilter").value;

  container.innerHTML = "";

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search) &&
    (filter === "All" || s.grade === filter)
  );

  filtered.forEach((s, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${s.name}</h3>
      <p>Avg: ${s.average.toFixed(2)}</p>
      <p class="grade-${s.grade}">Grade: ${s.grade}</p>
      <button onclick="removeStudent(${index})">Remove</button>
    `;

    container.appendChild(card);
  });

  calculateStats(filtered);
}

// Remove
function removeStudent(index) {
  students.splice(index, 1);
  saveData();
  displayStudents();
}

// Stats
function calculateStats(data) {
  if (data.length === 0) {
    document.getElementById("stats").textContent = "No data";
    return;
  }

  const avg =
    data.reduce((sum, s) => sum + s.average, 0) / data.length;

  const pass =
    (data.filter(s => s.grade !== "F").length / data.length) * 100;

  document.getElementById("stats").textContent =
    `Avg: ${avg.toFixed(2)} | Pass: ${pass.toFixed(1)}%`;
}

// Init
displayStudents();