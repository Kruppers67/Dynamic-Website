import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve Webpack bundled files from /dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/src', express.static(path.join(__dirname, 'src')));

// Routes
app.get('/', (req, res) => {
  res.render('home', { title: "HomePage"}); 
});
app.get('/home', (req, res) => {
  res.render('home', { title: 'Home'}); 
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About'});
});
app.get('/store', (req, res) => {
  res.render('store', { title: 'Store'});
});
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact'});
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});