import api from '../utils/api';

api.post('/api/login', {
  email: 'test@example.com',
  password: '1234'
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
