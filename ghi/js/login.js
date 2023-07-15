window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', async event => {
      event.preventDefault();


      const fetchOptions = {
        method: 'post',
        body: new FormData(form),
        credentials: "include",
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
