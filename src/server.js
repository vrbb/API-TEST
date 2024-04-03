import app from './app.js';

app.listen(3333);

app.get('/', (req, res) => {
	res.send('Olá mundo!');
});
