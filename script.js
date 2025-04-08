document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("lotteryDate");
  const resultsSection = document.getElementById("resultsSection");

  dateInput.addEventListener("change", function () {
    const selectedDate = this.value;

    if (selectedDate) {
      // Format date as YYYY-MM-DD
      const formattedDate = new Date(selectedDate).toISOString().split("T")[0];

      // Create download links using dash (-) instead of underscore (_)
      resultsSection.innerHTML = `
        <h3>Results for ${formattedDate}</h3>
        <div class="download-buttons">
          <a href="uploads/${formattedDate}-1PM.pdf" download class="btn" target="_blank">Download 1 PM Result</a>
          <a href="uploads/${formattedDate}-8PM.pdf" download class="btn" target="_blank">Download 8 PM Result</a>
        </div>
      `;
    } else {
      resultsSection.innerHTML = "";
    }
  });
});
