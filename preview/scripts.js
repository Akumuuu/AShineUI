const API_URL = 'https://api.example.com/users';

class UserService {
  static async getUsers() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error('Error loading users:', error);
      return [];
    }
  }
}

function renderUsers(users) {
  const list = document.getElementById('users');

  list.innerHTML = '';

  users.forEach((user, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${user.name}`;

    list.appendChild(li);
  });
}

async function init() {
  const users = await UserService.getUsers();

  if (users.length === 0) {
    console.warn('No users found');
  }

  renderUsers(users);
}

document.addEventListener('DOMContentLoaded', init);
