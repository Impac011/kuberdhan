const dateInput = document.getElementById('lotteryDate');
const resultDiv = document.getElementById('result');

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const selectedDate = dateInput.value;

  if (!selectedDate) {
    resultDiv.innerHTML = "<p>Please select a date.</p>";
    return;
  }

  const resultHTML = `
    <h3>Results for ${selectedDate}</h3>
    <ul>
      <li><a href="./uploads/${selectedDate}-1PM.pdf" download>Download 1 PM Result</a></li>
      <li><a href="./uploads/${selectedDate}-8PM.pdf" download>Download 8 PM Result</a></li>
    </ul>
  `;

  resultDiv.innerHTML = resultHTML;
});
