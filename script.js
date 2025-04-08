document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/files')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('resultLinks');
      list.innerHTML = '';
      data.forEach(file => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = file.url;
        link.textContent = file.name;
        link.download = file.name;
        li.appendChild(link);
        list.appendChild(li);
      });
    });
});