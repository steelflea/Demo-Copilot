// app.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

let todos = [];
if (fs.existsSync('todos.json')) {
    const todosRaw = fs.readFileSync('todos.json', 'utf8');
    if (todosRaw.trim() !== '') {
        todos = JSON.parse(todosRaw);
    }
}

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/todo', (req, res) => {
    res.render('todo', { todos: todos });
});

app.post('/todo', (req, res) => {
    todos.push(req.body.todo);
    fs.writeFileSync('todos.json', JSON.stringify(todos));
    res.redirect('/todo');
});

app.delete('/todo/:id', (req, res) => {
    todos.splice(req.params.id, 1);
    fs.writeFileSync('todos.json', JSON.stringify(todos));
    res.redirect('/todo');
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});