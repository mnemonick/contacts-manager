import express from 'express';

const app = express();
const port = 3000;

// Обработка GET-запроса на главную страницу
app.get('/', (req: any, res: any) => {
	res.send('egorka-response');
});

// Запуск сервера
app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`);
});