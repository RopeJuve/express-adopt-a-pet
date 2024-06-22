import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.js';
import animalsRouter from './routes/animals.js';
import animalRouter from './routes/animal.js';

const PORT = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/animals', animalsRouter);
app.use('/animals', animalRouter);

app.use((req, res) => {
    res.status(404).render('404Error', { title: 'Page Not Found' });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});