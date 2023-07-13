window.addEventListener('DOMContentLoaded', async () => {
    const selectTag = document.getElementById('conference');

    const url = 'http://localhost:8000/api/conferences/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();

      for (let conference of data.conferences) {
        const option = document.createElement('option');
        option.value = conference.href;
        option.innerHTML = conference.name;
        selectTag.appendChild(option);
      }
    // Here, add the 'd-none' class to the loading icon
    const loadingSpinner = document.getElementById("loading-conference-spinner");
    loadingSpinner.classList.add("d-none");

    // Here, remove the 'd-none' class from the select tag
    selectTag.classList.remove("d-none");

    }

  });
