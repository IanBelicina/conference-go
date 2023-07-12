window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/states/';
    const response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        console.log(data);

        const selectTag = document.querySelector("#state");
        for (let state of data.states){
            let optionElement = document.createElement("option");
            optionElement.value = state.abbreviation;
            optionElement.innerHTML = state.name;

            selectTag.appendChild(optionElement);
        }
    }

  });
