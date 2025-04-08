document.getElementById("dateInput").addEventListener("change", async function () {
  const selectedDate = this.value;
  const resultContainer = document.getElementById("resultContainer");

  resultContainer.innerHTML = "";
  if (!selectedDate) return;

  // Format display date
  const displayDate = new Date(selectedDate).toLocaleDateString("en-IN", {
    day: "2-digit", month: "2-digit", year: "numeric"
  });

  // Construct file URLs
  const urls = {
    "1 PM": `/upload/${selectedDate}_1PM.pdf`,
    "8 PM": `/upload/${selectedDate}_8PM.pdf`
  };

  let anyResultAvailable = false;

  for (let [time, url] of Object.entries(urls)) {
    const exists = await checkFileExists(url);
    if (exists) {
      anyResultAvailable = true;
      resultContainer.innerHTML += `
        <h2>${time} Result (${displayDate})</h2>
        <iframe src="${url}" title="${time} PDF Preview"></iframe><br/>
        <a class="download-btn" href="${url}" download>Download ${time} Result</a>
      `;
    } else {
      resultContainer.innerHTML += `
        <h2>${time} Result (${displayDate})</h2>
        <p class="error-message">No result available.</p>
      `;
    }
  }

  resultContainer.style.display = "block";
});

async function checkFileExists(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok;
  } catch (err) {
    return false;
  }
}
