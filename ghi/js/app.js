function createCard(name, description, picture_url){
    return `
    <div class="card">
      <img src="${picture_url}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
      </div>
    </div>
  `;
}


window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/';

    try {
      const response = await fetch(url);

      if (!response.ok) {
        // Figure out what to do when the response is bad
        console.log("bad response");
      } else {
        const data = await response.json();

        for (let conference of data.conferences) {
          const detailUrl = `http://localhost:8000${conference.href}`;
          const detailResponse = await fetch(detailUrl);
          if (detailResponse.ok) {
            const details = await detailResponse.json();
            const title = details.conference.name;
            const description = details.conference.description;
            const pictureUrl = details.conference.picture_url;
            const html = createCard(title, description, pictureUrl);
            const column = document.querySelector('.col');
            column.innerHTML += html;

          }
        }

      }
    } catch (e) {
      // Figure out what to do if an error is raised
      console.log("in the catch");
    }

  });

// window.addEventListener('DOMContentLoaded', async () => {

//     const url = 'http://localhost:8000/api/conferences/';

//     try {
//       const response = await fetch(url);

//       if (!response.ok) {
//         // Figure out what to do when the response is bad
//         console.log("bad");
//       } else {
//         const data = await response.json();

//         for (let data of data.conferences){
//             const conference = data.conferences[0];
//             const nameTag = document.querySelector('.card-title');
//             nameTag.innerHTML = conference.name;

//             const detailUrl = `http://localhost:8000${conference.href}`;
//             const detailResponse = await fetch(detailUrl);
//             if (detailResponse.ok) {
//               const details = await detailResponse.json();
//               console.log(details);

//               const desciptionData = details.conference.description;
//             //   const descriptionTag = document.querySelector('.card-text');
//             //   descriptionTag.innerHTML = desciptionData;

//               const pictureUrlData = details.conference.picture_url;
//             //   const imageTag = document.querySelector(".card-img-top");
//             //   imageTag.src = pictureUrlData;
//             const html = createCard()

//             }

//         }


//       }
//     } catch (e) {
//       // Figure out what to do if an error is raised
//       console.log("in the catch");
//     }

//   });
