const dateInput = document.getElementById("date");
const resultDiv = document.getElementById("result");

function checkFileExists(url, callback) {
  fetch(url, { method: 'HEAD' })
    .then(res => callback(res.ok))
    .catch(() => callback(false));
}

function renderDownloadLink(date, time) {
  const fileName = `${date}-${time}.pdf`;
  const filePath = `./uploads/${fileName}`;

  return new Promise(resolve => {
    checkFileExists(filePath, exists => {
      if (exists) {
        resolve(`<li><a href="${filePath}" download>Download ${time} Result</a></li>`);
      } else {
        resolve(`<li><span style="color: red;">${time} Result not available</span></li>`);
      }
    });
  });
}

document.querySelector('form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const selectedDate = dateInput.value;

  if (!selectedDate) {
    resultDiv.innerHTML = "<p>Please select a date.</p>";
    return;
  }

  const onePM = await renderDownloadLink(selectedDate, '1PM');
  const eightPM = await renderDownloadLink(selectedDate, '8PM');

  resultDiv.innerHTML = `
    <h3>Results for ${selectedDate}</h3>
    <ul>${onePM}${eightPM}</ul>
  `;
});
