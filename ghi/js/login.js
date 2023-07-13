window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', async event => {
      event.preventDefault();

    //   const data = Object.fromEntries(new FormData(form))
      const fetchOptions = {
        method: 'post',
        body: new FormData(form),
        credentials: "include",
        // headers: {
        //   'Content-Type': 'application/json',
        // }
      };
      const url = 'http://localhost:8000/login/';
      const response = await fetch(url, fetchOptions);
      if (response.ok) {
        window.location.href = '/';
      } else {
        console.error(response);
      }
    });
  });
