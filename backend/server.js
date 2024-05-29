const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors'); // Importa el módulo CORS
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); // Habilita CORS para todas las rutas
const users = [
  { username: 'Camilly', password: '1234' },
  { username: 'user2', password: 'password2' }
];


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ username: user.username }, 'your_jwt_secret', {
      expiresIn: 86400
      
    });
    res.status(200).send({ auth: true, token,username: user.username });

  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
