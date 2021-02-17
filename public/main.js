const loadUsers = () => {
  fetch('/api/users')
    .then((res) => res.json())
    .then((users) => {
      const ul = document.querySelector('#users');
      for (let user of users) {
        let li = document.createElement('li');
        li.textContent = `${user.name}`;
        ul.appendChild(li);
      }
    });
};
