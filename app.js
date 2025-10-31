import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

const PORT = 3007;

app.get('/', (req, res) =>{
    res.render('home');

});

app.post('/submit-flight', (req, res) =>{
    res.render('thankyou');

});

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`);

}); 